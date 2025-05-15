'use client';

import { signIn } from 'next-auth/react';
import { useState, FormEvent } from 'react'; // Added FormEvent
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams(); // This hook causes the issue
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleCredentialsLogin = async (e: FormEvent) => { // Typed e
    e.preventDefault();
    setErrorMsg(''); // Clear previous errors
    const result = await signIn('credentials', {
      redirect: false, // Important to handle redirect manually
      username: email,
      password,
      // callbackUrl: callbackUrl, // Let signIn handle this internally based on pages config or default
    });

    if (result?.error) {
      // Map common error messages or use result.error directly
      if (result.error === "CredentialsSignin") {
        setErrorMsg("Invalid email or password.");
      } else {
        setErrorMsg(result.error);
      }
    } else if (result?.ok && result.url) {
      // If signIn is successful and gives a URL, redirect.
      // Otherwise, if no URL, it might mean redirect:false stopped it and it's up to us
      router.push(callbackUrl); // Use the callbackUrl derived from searchParams
    } else if (result?.ok) {
      // Fallback if no URL but still ok
      router.push(callbackUrl);
    }
  };

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl });
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-amber-800 p-8 shadow-xl">
      <h1 className="mb-6 text-center text-2xl font-bold">Sign In</h1>

      {errorMsg && (
        <div className="mb-4 rounded bg-red-100 p-2 text-sm text-red-700">{errorMsg}</div>
      )}

      <form onSubmit={handleCredentialsLogin} className="space-y-4">
        <div>
          <label htmlFor="emailInput" className="block text-sm font-medium">Email</label> {/* Added htmlFor */}
          <input
            id="emailInput" // Added id
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 p-2 text-gray-900" // Added text-gray-900 for visibility
          />
        </div>

        <div>
          <label htmlFor="passwordInput" className="block text-sm font-medium">Password</label> {/* Added htmlFor */}
          <input
            id="passwordInput" // Added id
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 w-full rounded border border-gray-300 p-2 text-gray-900" // Added text-gray-900
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Sign in with Email
        </button>
      </form>

      <div className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 flex-shrink text-sm text-gray-200">OR</span> {/* Adjusted color for visibility */}
        <div className="flex-grow border-t border-gray-300"></div>
      </div>


      <button
        onClick={handleGoogleLogin}
        className="w-full rounded border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-100 flex items-center justify-center space-x-2" // Added flex for icon
      >
         {/* Optional: Add Google Icon SVG here */}
        <span>Sign in with Google</span>
      </button>
      <div className="mt-6 text-center">
         <button
             onClick={() => router.push('/signup')} // Assuming you have a signup page
             className="text-sm text-blue-200 hover:text-blue-100 hover:underline"
         >
             Dont have an account? Sign Up
         </button>
     </div>
    </div>
  );
}