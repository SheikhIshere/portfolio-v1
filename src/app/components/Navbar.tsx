import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('hero')} className="text-xl font-bold text-white">
              Imran Rafi
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('projects')} className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('architecture')} className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors">
              Architecture
            </button>
            <button onClick={() => scrollToSection('api-docs')} className="text-[#94A3B8] hover:text-[#0EA5A4] transition-colors">
              API Docs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0EA5A4]/90 transition-colors"
            >
              Hire Me
            </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1itIk-wV2G2Fp2f8SUZ2Ou3eCac4fG7Nt"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <button className="px-4 py-2 border border-[#0EA5A4] text-[#0EA5A4] rounded-lg hover:bg-[#0EA5A4]/10 transition-colors flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Resume
                </button>
              </a>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#94A3B8] hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-[#1E293B]">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('architecture')}
              className="block w-full text-left py-2 text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
            >
              Architecture
            </button>
            <button
              onClick={() => scrollToSection('api-docs')}
              className="block w-full text-left py-2 text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
            >
              API Docs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full px-4 py-2 bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0EA5A4]/90 transition-colors"
            >
              Hire Me
            </button>
            <button className="block w-full px-4 py-2 border border-[#0EA5A4] text-[#0EA5A4] rounded-lg hover:bg-[#0EA5A4]/10 transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
