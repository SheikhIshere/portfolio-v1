import { Code, TestTube, GitBranch, Star } from 'lucide-react';

export function Metrics() {
  const metrics = [
    {
      icon: Code,
      value: '10+',
      label: 'Projects Shipped',
      color: 'text-[#0EA5A4]'
    },
    {
      icon: TestTube,
      value: '500+',
      label: 'Tests Written',
      color: 'text-blue-400'
    },
    {
      icon: GitBranch,
      value: '3',
      label: 'Active Repositories',
      color: 'text-green-400'
    },
    {
      icon: Star,
      value: '85%+',
      label: 'Code Coverage',
      color: 'text-yellow-400'
    }
  ];

  return (
    <section className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">By The Numbers</h2>
          <div className="w-20 h-1 bg-[#0EA5A4] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#1E293B] p-6 rounded-lg border border-[#0EA5A4]/20 text-center hover:border-[#0EA5A4] transition-all hover:shadow-lg hover:shadow-[#0EA5A4]/10"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
              </div>
              <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-[#94A3B8]">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">What People Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#0EA5A4]/20">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#94A3B8] mb-4 italic">
                "Excellent backend developer with strong Django skills. Delivered clean, well-documented APIs on time."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0EA5A4]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#0EA5A4] font-semibold">JD</span>
                </div>
                <div>
                  <div className="text-white font-semibold">John Developer</div>
                  <div className="text-sm text-[#94A3B8]">Tech Lead, Company XYZ</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#0EA5A4]/20">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#94A3B8] mb-4 italic">
                "Great system design skills. The architecture Imran implemented scaled perfectly with our growth."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0EA5A4]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#0EA5A4] font-semibold">SM</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sarah Manager</div>
                  <div className="text-sm text-[#94A3B8]">Project Manager, StartupABC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
