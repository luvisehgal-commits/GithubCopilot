import { auth } from "@clerk/nextjs/server";
import { notFound } from 'next/navigation';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    return notFound();
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
