import { GeistSans } from 'geist/font/sans';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={`${GeistSans.className} bg-background text-white min-h-screen`}>
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}
