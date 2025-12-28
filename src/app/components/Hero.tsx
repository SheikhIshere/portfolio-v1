// src/components/Hero.tsx
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Badge } from '../components/ui/badge';
// IMPORTANT: adjust this import to your repo (example: '../../asset/imran-rafi.png')
import avatar from '../../asset/imran-rafi.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = ['Python', 'Django', 'DRF', 'PostgreSQL', 'Docker', 'CI/CD',];// 'Redis', 'Celery'];

  // Refs for 3D interaction
  const ira3dRootRef = useRef<HTMLDivElement | null>(null);
  const ira3dCardRef = useRef<HTMLDivElement | null>(null);
  const ira3dImgRef = useRef<HTMLImageElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const root = ira3dRootRef.current;
    const card = ira3dCardRef.current;
    const img = ira3dImgRef.current;
    if (!root || !card || !img) return;

    let bounds: DOMRect;
    let pointerX = 0;
    let pointerY = 0;
    let lastX = 0;
    let lastY = 0;

    const updateBounds = () => {
      bounds = root.getBoundingClientRect();
    };
    updateBounds();
    window.addEventListener('resize', updateBounds);

    const onPointerMove = (e: PointerEvent) => {
      // capture pointer relative to element
      pointerX = (e.clientX - bounds.left) / bounds.width; // 0..1
      pointerY = (e.clientY - bounds.top) / bounds.height; // 0..1
      scheduleFrame();
    };

    const onPointerLeave = () => {
      // reset transform smoothly
      if (card) card.style.transition = 'transform 450ms cubic-bezier(.2,.9,.28,1)';
      if (img) img.style.transition = 'transform 600ms cubic-bezier(.2,.9,.28,1), box-shadow 600ms';
      // reset CSS vars used by shine
      root.style.setProperty('--ira3d-x', '50%');
      root.style.setProperty('--ira3d-y', '50%');
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
      img.style.transform = `translateZ(0px)`;
    };

    const scheduleFrame = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(renderFrame);
    };

    const renderFrame = () => {
      rafRef.current = null;
      // lerp for smoothness
      lastX += (pointerX - lastX) * 0.18;
      lastY += (pointerY - lastY) * 0.18;

      // Map to -1..1
      const nx = (lastX - 0.5) * 2;
      const ny = (lastY - 0.5) * 2;

      // rotation strength and depth
      const rotateMax = 10; // degrees
      const depthMax = 36; // px

      const rotateY = nx * rotateMax * -1; // invert for nicer tilt
      const rotateX = ny * rotateMax;

      const depth = Math.max(6, Math.abs(nx) + Math.abs(ny)) * depthMax * 0.25; // dynamic depth

      // apply transforms
      card.style.transition = 'transform 120ms linear';
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      img.style.transition = 'transform 220ms cubic-bezier(.2,.9,.28,1), box-shadow 220ms';
      img.style.transform = `translateZ(${depth}px)`;

      // move shine center (CSS vars expressed as percentages)
      const shineX = Math.round(lastX * 100);
      const shineY = Math.round(lastY * 100);
      root.style.setProperty('--ira3d-x', `${shineX}%`);
      root.style.setProperty('--ira3d-y', `${shineY}%`);
    };

    // Attach pointer events
    root.addEventListener('pointermove', onPointerMove);
    root.addEventListener('pointerleave', onPointerLeave);
    root.addEventListener('pointerdown', scheduleFrame);

    return () => {
      window.removeEventListener('resize', updateBounds);
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('pointerleave', onPointerLeave);
      root.removeEventListener('pointerdown', scheduleFrame);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0F172A] to-[#1E293B] pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">Imran Rafi</h1>
              <h2 className="text-2xl sm:text-3xl text-[#0EA5A4]">Backend Developer & System Designer</h2>
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
                href="https://github.com/sheikhishere"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/imran-rafi-0a7955293/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:thesheikh255@gmail.com"
                className="p-3 bg-white/5 rounded-lg text-[#94A3B8] hover:text-[#0EA5A4] hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Portrait (3D interactive) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Root wrapper for 3D card: unique prefixed names ira3d-7c */}
              <div
                id="ira3d-root-7c"
                ref={ira3dRootRef}
                className="ira3d-root-7c"
                aria-hidden={false}
                role="button"
                tabIndex={0}
                onClick={() => scrollToSection('projects')}
                style={{ outline: 'none' }}
              >
                {/* Depth card that rotates */}
                <div id="ira3d-card-7c" ref={ira3dCardRef} className="ira3d-card-7c">
                  {/* Border/frame */}
                  <div className="ira3d-border-7c">
                    {/* Image itself */}
                    <img
                      id="ira3d-img-7c"
                      ref={ira3dImgRef}
                      className="ira3d-img-7c"
                      src={avatar}
                      alt="Imran Rafi"
                      width={340}
                      height={340}
                    />
                    {/* dynamic shine overlay */}
                    <div className="ira3d-shine-7c" aria-hidden />
                  </div>
                  <div className="ira3d-caption-7c">
                    <div className="ira3d-name-7c">Imran Rafi</div>
                    <div className="ira3d-role-7c">Backend Developer</div>
                  </div>
                </div>

                {/* faint server circles behind */}
                <svg className="absolute inset-0 w-[460px] h-[460px] pointer-events-none" viewBox="0 0 460 460" aria-hidden>
                  <g fill="none" stroke="#0EA5A4" strokeWidth="1" opacity="0.05">
                    <circle cx="230" cy="230" r="160" />
                    <circle cx="230" cy="230" r="220" />
                  </g>
                </svg>
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

      {/* Inline CSS: unique ira3d-7c classes and vars */}
      <style>{`
        /* Root wrapper */
        #ira3d-root-7c {
          position: relative;
          width: 420px;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          --ira3d-x: 50%;
          --ira3d-y: 50%;
          z-index: 10;
        }

        /* Card that rotates in 3D */
        #ira3d-card-7c.ira3d-card-7c {
          width: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          transform-style: preserve-3d;
          transition: transform 220ms cubic-bezier(.2,.9,.28,1);
          will-change: transform;
          cursor: pointer;
        }

        .ira3d-border-7c {
          padding: 8px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(14,165,164,0.12), rgba(56,189,248,0.06));
          box-shadow: 0 14px 40px rgba(2,6,23,0.55), inset 0 1px 0 rgba(255,255,255,0.02);
          width: 340px;
          height: 340px;
          display: block;
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          transform-style: preserve-3d;
        }

        .ira3d-img-7c {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
          display: block;
          transform: translateZ(0px);
          transition: transform 220ms cubic-bezier(.2,.9,.28,1), box-shadow 220ms;
          box-shadow: 0 8px 30px rgba(2,6,23,0.55);
          -webkit-user-drag: none;
          will-change: transform, box-shadow;
          backface-visibility: hidden;
        }

        /* dynamic shine overlay: uses CSS vars set by JS */
        .ira3d-shine-7c {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at var(--ira3d-x, 50%) var(--ira3d-y, 50%), rgba(255,255,255,0.14), rgba(255,255,255,0.02) 15%, transparent 35%);
          mix-blend-mode: overlay;
          transition: background-position 140ms linear, opacity 220ms;
          opacity: 0.9;
        }

        .ira3d-caption-7c { text-align: center; margin-top: 8px; color: #94A3B8; }
        .ira3d-name-7c { color: #fff; font-weight: 700; font-size: 1.05rem; }
        .ira3d-role-7c { color: #94A3B8; font-size: 0.875rem; margin-top: 2px; }

        /* Reset/hover animations */
        #ira3d-root-7c:focus #ira3d-card-7c,
        #ira3d-root-7c:hover #ira3d-card-7c {
          /* slight hover scale to emphasize depth */
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.02);
        }

        /* small screens: hide heavyweight visuals */
        @media (max-width: 1280px) {
          #ira3d-root-7c { width: 360px; height: 360px; }
          .ira3d-border-7c { width: 300px; height: 300px; }
        }
        @media (max-width: 1024px) {
          #ira3d-root-7c { display: none; } /* keep layout tidy on tablet/phone */
        }
      `}</style>
    </section>
  );
}
