import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Database, Server, Workflow } from 'lucide-react';

export function Architecture() {
  return (
    <section id="architecture" className="py-20 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Architecture & Design</h2>
          <div className="w-20 h-1 bg-[#0EA5A4] mx-auto"></div>
          <p className="mt-4 text-[#94A3B8]">System design and architecture patterns I implement</p>
        </div>

        <Tabs defaultValue="erd" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-[#1E293B] h-auto">
            <TabsTrigger value="erd" className="flex items-center gap-2 py-3">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Database Design</span>
              <span className="sm:hidden">ERD</span>
            </TabsTrigger>
            <TabsTrigger value="flow" className="flex items-center gap-2 py-3">
              <Workflow className="w-4 h-4" />
              <span className="hidden sm:inline">Request Flow</span>
              <span className="sm:hidden">Flow</span>
            </TabsTrigger>
            <TabsTrigger value="deployment" className="flex items-center gap-2 py-3">
              <Server className="w-4 h-4" />
              <span className="hidden sm:inline">Deployment</span>
              <span className="sm:hidden">Deploy</span>
            </TabsTrigger>
          </TabsList>

          {/* ERD Diagram */}
          <TabsContent value="erd" className="mt-8">
            <div className="bg-[#1E293B] rounded-lg border border-[#0EA5A4]/20 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Entity Relationship Diagram</h3>
              <div className="bg-[#0F172A] p-6 rounded-lg border border-[#0EA5A4]/20">
                <pre className="text-[#0EA5A4] font-mono text-sm whitespace-pre-wrap">
{`┌─────────────────────────┐
│        User             │
├─────────────────────────┤
│ • id (PK)               │
│ • email (unique)        │
│ • password_hash         │
│ • role                  │
│ • created_at            │
└──────────┬──────────────┘
           │ 1:N
           │
┌──────────▼──────────────┐
��      Profile           │
├─────────────────────────┤
│ • id (PK)               │
│ • user_id (FK)          │
│ • name                  │
│ • phone                 │
│ • address               │
└─────────────────────────┘

┌─────────────────────────┐
│      Resource           │
├─────────────────────────┤
│ • id (PK)               │
│ • title                 │
│ • description           │
│ • status                │
│ • created_by (FK)       │
└──────────┬──────────────┘
           │ N:M
           │
┌──────────▼──────────────┐
│    Transaction          │
├─────────────────────────┤
│ • id (PK)               │
│ • user_id (FK)          │
│ • resource_id (FK)      │
│ • status                │
│ • timestamp             │
└─────────────────────────┘`}
                </pre>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0F172A] p-4 rounded-lg border border-[#0EA5A4]/20">
                  <h4 className="text-white font-semibold mb-2">Normalization</h4>
                  <p className="text-[#94A3B8] text-sm">3NF compliant schema design</p>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-lg border border-[#0EA5A4]/20">
                  <h4 className="text-white font-semibold mb-2">Indexing</h4>
                  <p className="text-[#94A3B8] text-sm">Strategic indexes for performance</p>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-lg border border-[#0EA5A4]/20">
                  <h4 className="text-white font-semibold mb-2">Constraints</h4>
                  <p className="text-[#94A3B8] text-sm">Foreign keys and unique constraints</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Request Flow */}
          <TabsContent value="flow" className="mt-8">
            <div className="bg-[#1E293B] rounded-lg border border-[#0EA5A4]/20 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Request Flow Architecture</h3>
              <div className="bg-[#0F172A] p-6 rounded-lg border border-[#0EA5A4]/20">
                <pre className="text-[#0EA5A4] font-mono text-sm whitespace-pre-wrap">
{`     Client Request
            │
            ▼
     ┌──────────────┐
     │   Nginx/LB   │ ← Rate Limiting
     └──────┬───────┘
            │
            ▼
     ┌──────────────┐
     │  Gunicorn    │ ← WSGI Server
     └──────┬───────┘
            │
            ▼
     ┌──────────────────┐
     │  Django App      │
     │  ├─ Middleware   │ ← Auth, CORS, etc.
     │  ├─ Views        │ ← Business Logic
     │  └─ Serializers  │ ← Data Validation
     └──────┬───────────┘
            │
            ├────────────────────────┐
            │                        │
            ▼                        ▼
     ┌──────────────┐      ┌──────────────┐
     │  PostgreSQL  │      │   Redis      │
     │   (Primary)  │      │  (Cache)     │
     └──────────────┘      └──────────────┘
                                  │
                                  ▼
                         ┌──────────────┐
                         │    Celery    │
                         │   Workers    │
                         └──────────────┘`}
                </pre>
              </div>
              <div className="mt-6 space-y-4">
                <div className="bg-[#0F172A] p-4 rounded-lg border border-[#0EA5A4]/20">
                  <h4 className="text-white font-semibold mb-2">Caching Strategy</h4>
                  <ul className="text-[#94A3B8] text-sm space-y-1">
                    <li>• Redis for frequently accessed data</li>
                    <li>• Cache invalidation on data updates</li>
                    <li>• TTL-based expiration policies</li>
                  </ul>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-lg border border-[#0EA5A4]/20">
                  <h4 className="text-white font-semibold mb-2">Async Tasks</h4>
                  <ul className="text-[#94A3B8] text-sm space-y-1">
                    <li>• Email notifications via Celery</li>
                    <li>• Background data processing</li>
                    <li>• Scheduled periodic tasks</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Deployment */}
          <TabsContent value="deployment" className="mt-8">
            <div className="bg-[#1E293B] rounded-lg border border-[#0EA5A4]/20 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Deployment Architecture</h3>
              <div className="bg-[#0F172A] p-6 rounded-lg border border-[#0EA5A4]/20">
                <pre className="text-[#0EA5A4] font-mono text-sm whitespace-pre-wrap">
{`       Internet
           │
           ▼
    ┌─────────────┐
    │   Nginx     │ ← SSL Termination
    │  (Reverse   │
    │   Proxy)    │
    └──────┬──────┘
           │
           ├───────────────────────────┐
           │                           │
           ▼                           ▼
  ┌─────────────────┐      ┌─────────────────┐
  │  App Server 1   │      │  App Server 2   │
  │   (Docker)      │      │   (Docker)      │
  │                 │      │                 │
  │  • Django App   │      │  • Django App   │
  │  • Gunicorn     │      │  • Gunicorn     │
  └────────┬────────┘      └────────┬────────┘
           │                        │
           └───────────┬────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │PostgreSQL│  │  Redis   │  │  Celery  │
  │  (RDS)   │  │  Cache   │  │ Workers  │
  └──────────┘  └──────────┘  └──────────┘`}
                </pre>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0F172A] p-4 rounded-lg border border-[#0EA5A4]/20">
                  <h4 className="text-white font-semibold mb-2">Docker Compose</h4>
                  <ul className="text-[#94A3B8] text-sm space-y-1">
                    <li>• Multi-container setup</li>
                    <li>• Network isolation</li>
                    <li>• Volume persistence</li>
                  </ul>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-lg border border-[#0EA5A4]/20">
                  <h4 className="text-white font-semibold mb-2">CI/CD Pipeline</h4>
                  <ul className="text-[#94A3B8] text-sm space-y-1">
                    <li>• GitHub Actions</li>
                    <li>• Automated testing</li>
                    <li>• Zero-downtime deploys</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
