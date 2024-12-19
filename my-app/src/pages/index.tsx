import { Geist } from 'next/font/google';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

const geist = Geist({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={`${geist.className} bg-background text-white min-h-screen`}>
      <Navigation />
      <Hero />
    </div>
  );
}
