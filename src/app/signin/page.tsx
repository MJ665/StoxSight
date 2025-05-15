import { Suspense } from 'react';
import SignInForm from './SignInForm'; // Adjust path if you put SignInForm in components/

// This component can now be a Server Component if it doesn't use client hooks itself
export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4"> {/* Changed background for contrast */}
      <Suspense fallback={<LoadingSignIn />}> {/* Or any other loading UI */}
        <SignInForm />
      </Suspense>
    </div>
  );
}

// A simple loading fallback component
function LoadingSignIn() {
  return (
     <div className="w-full max-w-md rounded-2xl bg-amber-800 p-8 shadow-xl animate-pulse">
         <div className="h-8 bg-amber-700 rounded w-3/4 mb-6 mx-auto"></div>
         <div className="space-y-4">
             <div>
                 <div className="h-4 bg-amber-700 rounded w-1/4 mb-1"></div>
                 <div className="h-10 bg-amber-600 rounded w-full"></div>
             </div>
             <div>
                 <div className="h-4 bg-amber-700 rounded w-1/4 mb-1"></div>
                 <div className="h-10 bg-amber-600 rounded w-full"></div>
             </div>
             <div className="h-10 bg-blue-500 rounded w-full mt-2"></div>
         </div>
         <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-4 flex-shrink text-sm text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-700"></div>
         </div>
         <div className="h-10 bg-gray-300 rounded w-full"></div>
     </div>
  );
}













// 'use client';




// import { signIn } from 'next-auth/react';
// import { useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';

// export default function SignInPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleCredentialsLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const result = await signIn('credentials', {
//       redirect: false,
//       username: email,
//       password,
//       callbackUrl,
//     });

//     if (result?.error) {
//       setErrorMsg(result.error);
//     } else {
//       router.push(callbackUrl);
//     }
//   };

//   const handleGoogleLogin = () => {
//     signIn('google', { callbackUrl });
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-black-100 p-4">
//       <div className="w-full max-w-md rounded-2xl  bg-amber-800 p-8 shadow-xl">
//         <h1 className="mb-6 text-2xl font-bold text-center">Sign In</h1>

//         {errorMsg && (
//           <div className="mb-4 rounded bg-red-100 p-2 text-sm text-red-600">{errorMsg}</div>
//         )}

//         <form onSubmit={handleCredentialsLogin} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 w-full rounded border border-gray-300 p-2"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium ">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="mt-1 w-full rounded border border-gray-300 p-2"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
//           >
//             Sign in with Email
//           </button>
//         </form>

//         <div className="my-6 flex items-center justify-center text-sm text-gray-500">
//           or
//         </div>

//         <button
//           onClick={handleGoogleLogin}
//           className="w-full rounded border border-gray-300 p-2 text-gray-700 hover:bg-gray-100"
//         >
//           Sign in with Google
//         </button>
//       </div>
//     </div>
//   );
// }
