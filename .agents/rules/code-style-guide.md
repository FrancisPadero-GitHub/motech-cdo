---
trigger: always_on
---

# Front-End Architecture & Clean Code Rules

> Project rules for the Antigravity agent. Read this before generating, editing, or refactoring any code in this repo. Treat every rule as a hard constraint, not a suggestion.

## 0. Agent Operating Rules (Antigravity-specific)

- **Plan before large edits**: For any change touching 3+ files or introducing a new hook/table, write a short plan (files to touch, why) before editing.
- **Never invent schema**: Don't assume a Supabase table/column exists. Check `types/` or run a query/migration read first. If unsure, ask or inspect before writing code against it.
- **Prefer surgical diffs**: Edit only what's needed to satisfy the request. Don't reformat unrelated code or reorder imports as a side effect.
- **Self-verify**: After generating code, re-read it against Sections 1–8 below before presenting it as done. If `pnpm lint` is available in the environment, run it.
- **Flag violations instead of silently fixing unrelated ones**: If you spot an existing violation outside the scope of the current task, mention it briefly rather than refactoring it unasked.
- **Secrets**: Never hardcode API keys, Supabase service-role keys, or PayMongo secret keys in code. Always reference `process.env.*` and confirm the var exists in `.env.example`.

---

## 1. Core Principles

- **Strict Separation of Concerns**: UI components must NEVER directly invoke database clients (e.g., Supabase SDK), write raw SQL/queries, or manage complex data-fetching/mutation state internally.
- **Single Source of Truth for Data Logic**: All database interaction and async data orchestration lives inside custom TanStack Query hooks in a dedicated `hooks/` directory.
- **Modularization Scale Strategy**:
  - Files/components/functions reaching **800 lines** MUST be refactored into smaller, single-responsibility modules.
  - **DRY**: Any logic, UI pattern, or type repeated in 2+ places must be extracted immediately, regardless of line count.
- **Linting & Quality Checks**: Always run `pnpm lint` and resolve all warnings/errors before finishing a task (excluding `components/ui/`, managed by shadcn).

---

## 2. Directory & Folder Structure Standard

```text
src/
├── api/                   # Base Supabase API client configs and raw service calls
├── components/            # Presentational UI components (pure UI / layout)
│   ├── ui/                # shadcn/ui primitives (excluded from lint rules)
│   └── feature-name/      # Feature-specific presentational components
├── hooks/                 # ALL data fetching, mutations, state management (TanStack Query)
│   ├── queries/           # Read operations (useQuery, useInfiniteQuery)
│   └── mutations/         # Write operations (useMutation)
├── utils/                 # Pure helper functions, formatting, validation schemas
├── types/                 # TypeScript interfaces and type definitions
└── app/ or pages/         # Route/page-level views that compose hooks + UI
```

---

## 3. Hook Architecture (TanStack Query + Supabase)

1. **No Supabase imports in UI**: `import { supabase } from '...'` is forbidden inside `components/` (outside `api/`/`hooks/`) or `app/`/`pages/`.
2. **Encapsulate Query Keys**: Store query keys in a structured factory to prevent caching bugs and simplify invalidation.
3. **Always comment non-obvious logic**: brief, high-signal inline comments explaining *why*, not *what* (syntax is self-evident).

### Query Key Factory (`hooks/queries/keys.ts`)

```typescript
export const queryKeys = {
  users: {
    all: ["users"] as const,
    list: (filters: Record<string, unknown>) => [...queryKeys.users.all, "list", filters] as const,
    detail: (id: string) => [...queryKeys.users.all, "detail", id] as const,
  },
  products: {
    all: ["products"] as const,
    detail: (id: string) => [...queryKeys.products.all, "detail", id] as const,
  },
};
```

### Query Hook (`hooks/queries/useFetchUserProfile.ts`)

```typescript
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/api/supabaseClient";
import { queryKeys } from "./keys";
import { UserProfile } from "@/types/user";

async function fetchUserProfile(userId: string): Promise<UserProfile> {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single();
  if (error) throw new Error(`Failed to fetch user profile: ${error.message}`);
  return data;
}

export function useFetchUserProfile(userId: string) {
  return useQuery({
    queryKey: queryKeys.users.detail(userId),
    queryFn: () => fetchUserProfile(userId),
    enabled: Boolean(userId), // Don't fire until a valid userId exists
    staleTime: 1000 * 60 * 5,
  });
}
```

### Mutation Hook (`hooks/mutations/useUpdateUserProfile.ts`)

```typescript
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/api/supabaseClient";
import { queryKeys } from "../queries/keys";
import { UserProfileUpdate } from "@/types/user";

async function updateUserProfile({ userId, updates }: { userId: string; updates: UserProfileUpdate }) {
  const { data, error } = await supabase.from("profiles").update(updates).eq("id", userId).select().single();
  if (error) throw new Error(`Profile update failed: ${error.message}`);
  return data;
}

export function useUpdateUserProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.detail(variables.userId) });
    },
  });
}
```

---

## 4. Component Rules & Destructuring

1. **Destructure hook returns** at the top of the component body.
2. **Pure presentational layer**: components render state and handle visual interaction only.
3. **No inline async logic**: delegate to handler functions calling mutation triggers from hooks.

```typescript
import React from 'react';
import { useFetchUserProfile } from '@/hooks/queries/useFetchUserProfile';
import { useUpdateUserProfile } from '@/hooks/mutations/useUpdateUserProfile';

interface UserProfileCardProps {
  userId: string;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({ userId }) => {
  const { data: profile, isLoading, isError, error } = useFetchUserProfile(userId);
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateUserProfile();

  if (isLoading) return <div className="p-4 text-center">Loading user profile...</div>;
  if (isError) return <div className="p-4 text-red-500">Error loading profile: {error?.message}</div>;

  const handleBioUpdate = (newBio: string) => {
    updateProfile({ userId, updates: { bio: newBio } });
  };

  return (
    <div className="profile-card">
      <h2>{profile?.username}</h2>
      <p>{profile?.bio || 'No bio provided.'}</p>
      <button disabled={isUpdating} onClick={() => handleBioUpdate('Updated bio from UI interaction')}>
        {isUpdating ? 'Saving...' : 'Update Bio'}
      </button>
    </div>
  );
};
```

---

## 5. Modularization & Threshold Rules

1. **800-Line Limit**: No file exceeds 800 lines. When approaching it:
   - Extract helpers/formatters to `utils/`.
   - Split complex sub-trees into standalone sub-components.
   - Move state/handlers/logic blocks into custom hooks.
2. **DRY Enforcement**: Any UI pattern, validation logic, data mapping, or query option repeated in 2+ places is extracted immediately.

---

## 6. Environment, Payments & Webhooks (project-specific)

- **PayMongo & Resend calls** live server-side only (route handlers / server actions) — never called from client components.
- **Webhook handlers** (`payment_webhook_events`, Resend webhooks) must verify signatures before processing and must be idempotent (safe to receive the same event twice).
- **RLS**: Any new Supabase table defaults to RLS **enabled**. Disabling RLS requires an explicit, documented reason in the migration comment.
- **Foreign keys touching `auth.users`**: default to `ON DELETE SET NULL` unless the record should hard-delete with the user.

---

## 7. Linting & Verification Protocol

Before declaring a task complete:

1. Run `pnpm lint` and resolve every warning/error (except `src/components/ui/`).
2. Confirm `.eslintignore` / `eslint.config.js` excludes `src/components/ui/**`.

---

## 8. Commenting Standards

- 1–2 lines max per logic block.
- Explain **intent and flow**, not generic syntax.

```typescript
// Computes total discounted price based on active promotional tiers
const finalPrice = calculateDiscount(basePrice, userTier);

// Discards stale cache immediately when a security-critical field changes
if (isSecurityFieldUpdated) {
  queryClient.removeQueries({ queryKey: queryKeys.users.detail(userId) });
}
```

---

## 9. Additional Quality Standards

1. **Strict TypeScript**: no `any`. Explicit interfaces for Supabase payloads, hook returns, and props.
2. **Optimistic UI**: use `onMutate` for snappy UX on critical interactions, with rollback on error.
3. **Error Boundaries & Fallbacks**: handle `isLoading`, `isError`, and empty states before touching nested properties.
4. **Naming**: hooks `useX`, mutation hooks `useXMutation` or `useUpdateX`/`useCreateX`, query key factories singular per domain (`queryKeys.products`, not `productsKeys`).
