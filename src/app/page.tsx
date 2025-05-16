import { Appbar } from './components/Appbar'; // Adjust path if needed
import { HeroSection } from './components/HeroSection.tsx'; // We'll create this next
import { FeaturesSection } from './components/FeaturesSection.tsx'; // We'll create this next
import { Footer } from './components/Footer.tsx'; // We'll create this next

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      {/* <Appbar /> */}
      <main className="flex-grow">
        {/* <HeroSection /> */}
        {/* <FeaturesSection /> */}
        {/* You can add more sections here */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}