'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      username: email,
      password,
      callbackUrl,
    });

    if (result?.error) {
      setErrorMsg(result.error);
    } else {
      router.push(callbackUrl);
    }
  };

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black-100 p-4">
      <div className="w-full max-w-md rounded-2xl  bg-amber-800 p-8 shadow-xl">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign In</h1>

        {errorMsg && (
          <div className="mb-4 rounded bg-red-100 p-2 text-sm text-red-600">{errorMsg}</div>
        )}

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded border border-gray-300 p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium ">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded border border-gray-300 p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Sign in with Email
          </button>
        </form>

        <div className="my-6 flex items-center justify-center text-sm text-gray-500">
          or
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full rounded border border-gray-300 p-2 text-gray-700 hover:bg-gray-100"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
