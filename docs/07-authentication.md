# Authentication and Protected Routes

## Clerk-only authentication
- Use Clerk for all auth flows.
- Do not implement or rely on any other authentication method.
- Use Clerk components and APIs consistently across the app.

## Route access rules
- `/dashboard` is a protected route.
- Users must be logged in to access `/dashboard`.
- If unauthenticated, redirect them to the Clerk sign-in modal or a route that launches it.

## Homepage behavior
- If a user is already logged in and visits the homepage (`/`), redirect them to `/dashboard`.
- The homepage should not remain accessible as a landing page for logged-in users.

## Sign in / Sign up behavior
- Sign in and sign up must always launch via Clerk as a modal.
- Do not use separate standalone pages for authentication.
- Use Clerk modal flows instead of custom modal or page-based sign-in components.

## Implementation guidance
- Use `auth()` from `@clerk/nextjs` in server components and API routes.
- Verify `userId` before rendering protected data or performing sensitive actions.
- Example protected route guard:

```ts
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) {
    redirect('/');
  }

  return <div>Protected dashboard content</div>;
}
```

- Example homepage redirect for authenticated users:

```ts
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function HomePage() {
  const { userId } = auth();
  if (userId) {
    redirect('/dashboard');
  }

  return <div>Public landing content</div>;
}
```
