import { useEffect, useState } from 'react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Architecture } from './components/Architecture';
import { ApiDocs } from './components/ApiDocs';
import { Metrics } from './components/Metrics';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800); // 1.8s
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Architecture />
      <ApiDocs />
      <Metrics />
      <Contact />
      <Footer />
    </div>
  );
}
