import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          Thanks for using StoxSight!
        </p>
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="https://mj665.in" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            Visit mj665.in
          </Link>
          <span>|</span>
          <Link href="https://docs.google.com/document/d/1cVICbw8oGtTHjICeoM5jAZzpx95A4IOZBn1639skvVM/edit?pli=1&tab=t.0" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
            My Resume
          </Link>
        </div>
        <p className="text-xs">
          © {new Date().getFullYear()} StoxSight. All Rights Reserved (for this Hackathon Project).
        </p>
      </div>
    </footer>
  );
}