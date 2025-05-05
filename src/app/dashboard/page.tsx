'use client';

import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">
        Welcome, {session?.user?.name || session?.user?.email}!
      </h1>

      <div className="space-x-4">
        <button
          onClick={() => router.push('/user')}
          className="rounded px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
        >
          Edit Profile
        </button>

        <button
          onClick={() => signOut({ callbackUrl: '/signin' })}
          className="rounded px-4 py-2 bg-red-600 text-white hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
