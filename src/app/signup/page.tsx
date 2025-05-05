'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      setErrorMsg(data.error || "Signup failed");

      if (data.redirectToSignin) {
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      }
    } else {
      setSuccessMsg("Signup successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1500);
    }
  };

  const handleGoogleSignup = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign Up</h1>

        {errorMsg && <div className="mb-4 rounded bg-red-100 p-2 text-sm text-red-600">{errorMsg}</div>}
        {successMsg && <div className="mb-4 rounded bg-green-100 p-2 text-sm text-green-700">{successMsg}</div>}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full rounded border border-gray-300 p-2"
            />
          </div>

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
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded border border-gray-300 p-2"
            />
          </div>

          <button type="submit" className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700">
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-sm text-gray-500">or</div>

        <button
          onClick={handleGoogleSignup}
          className="w-full rounded border border-gray-300 p-2 text-sm hover:bg-gray-100"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
