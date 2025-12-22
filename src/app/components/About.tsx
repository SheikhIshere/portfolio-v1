import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#0EA5A4] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              Backend developer passionate about building scalable systems and clean APIs. 
              I enjoy tackling complex architectural challenges and implementing efficient 
              solutions with Django and Python.
            </p>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              When I'm not coding, I'm diving into programming books, exploring new 
              technologies, or studying psychology to better understand user behavior 
              and team dynamics.
            </p>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              A constant learner who believes in writing maintainable code and 
              comprehensive documentation.
            </p>
          </div>

          {/* Right side - Quick Facts */}
          <div className="space-y-6">
            <div className="bg-[#0F172A] p-6 rounded-lg border border-[#0EA5A4]/20 hover:border-[#0EA5A4] transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0EA5A4]/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-[#0EA5A4]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                  <p className="text-[#94A3B8]">Diploma in Computer Science & Engineering</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-lg border border-[#0EA5A4]/20 hover:border-[#0EA5A4] transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0EA5A4]/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-[#0EA5A4]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Experience</h3>
                  <p className="text-[#94A3B8]">Internship at BD Calling Academy</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-lg border border-[#0EA5A4]/20 hover:border-[#0EA5A4] transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#0EA5A4]/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-[#0EA5A4]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Interests</h3>
                  <p className="text-[#94A3B8]">Backend Architecture, System Design, Programming & Psychology Books</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
