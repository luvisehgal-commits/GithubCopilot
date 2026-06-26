# Link Shortener Project - Agent Instructions

## Important: Read Documentation First

This project has specific coding standards and patterns. **It is incredibly important to ALWAYS read the relevant individual instructions file in the `/docs` directory BEFORE generating ANY code.**

- Identify the exact `/docs/*.md` file for the feature or area you are working on.
- Read that file completely before writing or modifying code.
- Do not skip this step under any circumstances.



## Critical Standards

### 1. TypeScript Strict Mode
- **All** code must have explicit types
- No implicit `any` types allowed
- Use discriminated unions for complex types
- Path aliases: always use `@/` prefix

### 2. Authentication & Authorization
- Always verify user identity with `auth()` from Clerk
- Always verify user **owns** the data before allowing mutations
- Use Clerk for all authentication - never implement custom auth

### 3. Component Architecture
- Server components by default (`app/` pages)
- Use "use client" only when state/effects needed
- Extract business logic to `/lib/services`
- Use shadcn/ui components before creating custom components
- Do not create custom UI components unless no shadcn/ui component exists

### 4. File Organization
- Pages in `/app` (route structure)
- Components in `/components` (PascalCase names)
- Utilities in `/lib` (by concern: services, validators, hooks)
- Database in `/db` (schema + client)
- API routes in `/app/api`
- Utilities in `/lib` (by concern: services, validators, hooks)
- Database in `/db` (schema + client)
- API routes in `/app/api`

### 5. Database Pattern
- Use Drizzle ORM (never raw SQL)
- Verify user ownership in WHERE clauses
- Use indexes on filtered/sorted columns
- Implement pagination for large datasets
- Avoid N+1 queries

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.2.9 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Database | Neon PostgreSQL + Drizzle ORM |
| Auth | Clerk v7 |
| UI | shadcn/ui + Radix UI + Tailwind CSS v4 |
| Icons | Lucide React |
| Linter | ESLint 9 |

## Before You Code

1. ✅ Read the relevant individual documentation file from `/docs` before generating any code.
2. ✅ Check if shadcn/ui has the component you need (see components.json).
3. ✅ Verify the file location (see [09-file-structure.md](docs/09-file-structure.md)).
4. ✅ Ensure proper type annotations throughout.
5. ✅ Add ownership checks for user-specific operations.
6. ✅ Test error cases and validation.

## Common Patterns

### Server Component Fetching
```typescript
import { auth } from '@clerk/nextjs';
import { db } from '@/db';

export async function MyPage() {
  const { userId } = auth();
  if (!userId) return notFound();
  
  const data = await db.query...where(eq(..., userId));
  return <div>{data}</div>;
}
```

### API Route with Auth
```typescript
import { auth } from '@clerk/nextjs';

export async function POST(req: NextRequest) {
  const { userId } = auth();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
  // Verify user owns resource
  // Execute business logic
  // Return response
}
```

### Component Props
```typescript
interface Props {
  title: string;
  onClick?: () => void;
  className?: string;
}

export function MyComponent({ title, onClick, className }: Props) {
  // Always define Props interface
  // Use TypeScript for all props
}
```

## Important Next.js Version Note

<!-- BEGIN:nextjs-agent-rules -->
This project uses Next.js 16.2.9 with breaking changes. APIs, conventions, and file structure may differ from training data. Always check `node_modules/next/dist/docs/` before writing code and heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Documentation Structure

```
docs/
├── 00-index.md                    # Start here
├── 01-project-overview.md         # Architecture
├── 02-coding-standards.md         # Conventions
├── 03-typescript-guidelines.md    # Types & strict mode
├── 04-component-development.md    # React patterns
├── 05-styling-guidelines.md       # Tailwind & shadcn
├── 06-database-orm.md             # Drizzle & queries
├── 07-authentication.md           # Clerk auth
├── 08-api-routes.md               # API patterns
├── 09-file-structure.md           # File organization
├── 10-performance.md              # Optimization
├── 11-error-handling.md           # Error patterns
└── 12-testing-guidelines.md       # Testing
```

## Implementation Checklist

Before committing code:
- [ ] Consulted relevant docs
- [ ] Code follows TypeScript strict mode
- [ ] User ownership verified (if applicable)
- [ ] Proper error handling implemented
- [ ] File placed in correct directory
- [ ] Props/types properly annotated
- [ ] Using @/ path aliases
- [ ] Error states handled
- [ ] No console.logs left in code
- [ ] ESLint passes (`npm run lint`)

## Questions?

1. Check the relevant documentation file
2. Look at similar existing code in the project
3. Refer to library documentation (Next.js, Drizzle, Clerk, shadcn/ui)
4. Follow the patterns established in docs/
