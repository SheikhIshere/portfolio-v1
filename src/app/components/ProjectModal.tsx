import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from './Projects';
import { CodeBlock } from './CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0F172A] border border-[#0EA5A4]/30 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#0F172A] border-b border-[#0EA5A4]/20 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#0EA5A4]/10 text-[#0EA5A4] rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#94A3B8] hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Overview */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
            <p className="text-[#94A3B8] leading-relaxed">{project.overview}</p>
          </section>

          {/* Features */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-[#94A3B8]">
                  <span className="text-[#0EA5A4] mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Architecture */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Architecture</h3>
            
            <Tabs defaultValue="erd" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-[#1E293B]">
                <TabsTrigger value="erd">Database (ERD)</TabsTrigger>
                <TabsTrigger value="deployment">Deployment</TabsTrigger>
              </TabsList>
              <TabsContent value="erd" className="mt-4">
                <div className="bg-[#1E293B] p-6 rounded-lg border border-[#0EA5A4]/20">
                  <pre className="text-[#0EA5A4] whitespace-pre-wrap font-mono text-sm">
                    {project.architecture.erd}
                  </pre>
                </div>
              </TabsContent>
              <TabsContent value="deployment" className="mt-4">
                <div className="bg-[#1E293B] p-6 rounded-lg border border-[#0EA5A4]/20">
                  <pre className="text-[#0EA5A4] whitespace-pre-wrap font-mono text-sm">
                    {project.architecture.deployment}
                  </pre>
                </div>
              </TabsContent>
            </Tabs>
          </section>

          {/* API Examples */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">API Examples</h3>
            <div className="space-y-6">
              {project.apiExamples.map((api, idx) => (
                <div key={idx} className="bg-[#1E293B] rounded-lg border border-[#0EA5A4]/20 overflow-hidden">
                  <div className="p-4 border-b border-[#0EA5A4]/20">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded text-sm font-mono ${
                        api.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                        api.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                        api.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {api.method}
                      </span>
                      <code className="text-[#0EA5A4] font-mono">{api.endpoint}</code>
                    </div>
                    <p className="text-[#94A3B8] text-sm mt-2">{api.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Request</h4>
                      <CodeBlock code={api.request} language="json" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Response</h4>
                      <CodeBlock code={api.response} language="json" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testing & CI */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Testing & CI/CD</h3>
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#0EA5A4]/20">
              <p className="text-[#94A3B8]">{project.testing}</p>
            </div>
          </section>

          {/* Links */}
          <section className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0EA5A4]/90 transition-colors"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-[#0EA5A4] text-[#0EA5A4] rounded-lg hover:bg-[#0EA5A4]/10 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
