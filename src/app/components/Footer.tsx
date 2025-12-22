import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-[#0EA5A4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Imran Rafi</h3>
            <p className="text-[#94A3B8] mb-4">
              Backend Developer & System Designer building reliable APIs and scalable systems.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="p-2 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('architecture')}
                  className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                >
                  Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('api-docs')}
                  className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                >
                  API Docs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'Redis', 'Celery', 'CI/CD'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/5 text-[#94A3B8] rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#0EA5A4]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#94A3B8] text-sm text-center sm:text-left">
            © {currentYear} Imran Rafi. All rights reserved.
          </p>
          <p className="text-[#94A3B8] text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-[#0EA5A4] fill-[#0EA5A4]" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
