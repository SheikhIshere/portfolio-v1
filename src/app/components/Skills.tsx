import { Code, Database, Server, Box, GitBranch, Layers } from 'lucide-react';
import { Progress } from '../components/ui/progress';

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Frameworks',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'Django REST Framework', level: 85 },
        { name: 'FastAPI', level: 50 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 35 },
        { name: 'MySql', level: 65 },
      ],
    },
    {
      icon: Server,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 55 },
        { name: 'Git', level: 85 },
        { name: 'Linux', level: 75 },
      ],
    },
    {
      icon: Box,
      title: 'Backend Technologies',
      skills: [
        { name: 'RESTful APIs', level: 90 },
        { name: 'Celery', level: 75 },
        { name: 'RabbitMQ', level: 30 },
        { name: 'JWT Auth', level: 85 },
      ],
    },
    {
      icon: Layers,
      title: 'Architecture Skills',
      skills: [
        { name: 'System Design', level: 80 },
        { name: 'Database Design (ERD)', level: 85 },
        { name: 'API Design', level: 85 },
        { name: 'Caching Strategies', level: 25 },
      ],
    },
    {
      icon: GitBranch,
      title: 'Other',
      skills: [
        { name: 'Async Tasks', level: 30 },
        { name: 'Testing', level: 75 },
        { name: 'Documentation', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-[#0EA5A4] mx-auto"></div>
          <p className="mt-4 text-[#94A3B8]">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#1E293B] p-6 rounded-lg border border-[#0EA5A4]/20 hover:border-[#0EA5A4] transition-all hover:shadow-lg hover:shadow-[#0EA5A4]/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#0EA5A4]/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-[#0EA5A4]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#94A3B8]">{skill.name}</span>
                      <span className="text-[#0EA5A4]">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
