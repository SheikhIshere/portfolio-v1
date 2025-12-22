import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Badge } from '../components/ui/badge';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'CI/CD', 'Redis', 'Celery'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0F172A] to-[#1E293B] pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                Imran Rafi
              </h1>
              <h2 className="text-2xl sm:text-3xl text-[#0EA5A4]">
                Backend Developer & System Designer
              </h2>
              <p className="text-lg text-[#94A3B8]">
                I build reliable APIs and design backend systems with Django and Python.
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-[#0F172A] text-[#0EA5A4] border-[#0EA5A4] hover:bg-[#0EA5A4]/10"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0EA5A4]/90 transition-colors"
              >
                Hire Me
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 border border-[#0EA5A4] text-[#0EA5A4] rounded-lg hover:bg-[#0EA5A4]/10 transition-colors"
              >
                View Projects
              </button>
              <button className="px-6 py-3 border border-[#94A3B8] text-[#94A3B8] rounded-lg hover:bg-white/5 transition-colors">
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="p-3 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Abstract Server Illustration */}
          <div className="hidden lg:block">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Abstract server visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Central server node */}
                  <div className="w-32 h-32 bg-[#0EA5A4]/20 border-2 border-[#0EA5A4] rounded-lg flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 bg-[#0EA5A4] rounded-lg"></div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0EA5A4]/40 border border-[#0EA5A4] rounded"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#0EA5A4]/40 border border-[#0EA5A4] rounded"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0EA5A4]/40 border border-[#0EA5A4] rounded"></div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0EA5A4]/40 border border-[#0EA5A4] rounded"></div>
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ pointerEvents: 'none' }}>
                    <line x1="50%" y1="50%" x2="50%" y2="0" stroke="#0EA5A4" strokeWidth="1" opacity="0.3" />
                    <line x1="50%" y1="50%" x2="50%" y2="100%" stroke="#0EA5A4" strokeWidth="1" opacity="0.3" />
                    <line x1="50%" y1="50%" x2="0" y2="50%" stroke="#0EA5A4" strokeWidth="1" opacity="0.3" />
                    <line x1="50%" y1="50%" x2="100%" y2="50%" stroke="#0EA5A4" strokeWidth="1" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
