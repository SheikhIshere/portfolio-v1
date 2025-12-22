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

export default function App() {
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
