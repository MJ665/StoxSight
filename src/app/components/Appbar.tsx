'use client';



import Link from 'next/link';
import { Button } from './../../components/ui/button.tsx'; // Adjust path if your components alias is different
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LogIn, LogOut, UserPlus, BarChart3, UserCircle2 } from 'lucide-react'; // Icons

export function Appbar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              {/* Placeholder for a logo - you can replace with an Image component or SVG */}
              <BarChart3 className="h-8 w-8 text-green-400" />
              <span className="font-bold text-2xl tracking-tight">
                Stox<span className="text-green-400">Sight</span>
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            {status === 'loading' ? (
              <div className="h-8 w-20 bg-gray-700 rounded animate-pulse"></div>
            ) : session?.user ? (
              <>
                <span className="text-sm hidden sm:inline">
                  Welcome, {session.user.name || session.user.email?.split('@')[0]}!
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => router.push('/dashboard')} // Assuming you have a dashboard
                  className="text-white hover:bg-gray-700 hidden md:inline-flex items-center"
                >
                   <UserCircle2 className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="border-red-500 text-red-400 hover:bg-red-600 hover:text-white"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.push('/signin')}
                  className="text-green-400 border-green-500 hover:bg-green-600 hover:text-white"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => router.push('/signup')}
                  className="bg-green-500 hover:bg-green-600 text-white hidden sm:inline-flex items-center"
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}