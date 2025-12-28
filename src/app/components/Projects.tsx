import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
// import { ProjectModal } from './ProjectModal';
import clinicLogo from '../../asset/clinic-z-logo.png'; // adjust path if needed

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  overview: string;
  architecture: {
    erd: string;
    deployment: string;
  };
  apiExamples: Array<{
    method: string;
    endpoint: string;
    description: string;
    request: string;
    response: string;
  }>;
  features: string[];
  testing: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'clinic-z',
      title: 'Clinic-Z - Smart Hospital Management System',
      description:
        'Clinic-z a smart hospital management backend system with DRF',
      stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Docker'],
      highlights: [
        'JWT + OTP authentication flows (register, activate, login, token refresh)',
        'Patient & doctor management with profile, qualifications, and availability',
        'Appointment scheduling with doctor/patient workflows',
        'Public portal endpoints (doctor list, reviews, services)',
        'Media handling with S3/R2 adapter and MEDIA_ROOT for local dev',
        'OpenAPI schema + Swagger UI',
        'Containerized deployment (Docker Compose → K8s path)'
      ],
      githubUrl: 'https://github.com/SheikhIshere/CliniZ-api-drf/tree/main',
      demoUrl: 'https://cliniz-api-drf.onrender.com',
      overview:
        'API-first backend for hospital workflows: user auth (OTP + JWT), patient & doctor profiles, availability management, appointment lifecycle, reviews, public portal, and background tasks for emails/media processing.',
      architecture: {
        erd: `User (id UUID, email, full_name, photo, is_active)
  | 1:1/1:N
  Patient (id, user_id, medical_history, ... )
  Doctor (id, user_id, qualifications, specializations, rate)
  Appointment (id, patient_id, doctor_id, status, appointment_time)
  AvailableTime (id, doctor_id, start, end, recurrence)
  Review (id, doctor_id, patient_id, star, comment)
  Media (id, owner_type, owner_id, file_path)`,
        deployment: `Client → Nginx → Gunicorn → Django
              ├→ PostgreSQL (primary data)
              ├→ Redis (cache + Celery broker)
              ├→ Celery workers (async tasks: emails, exports)
              └→ S3/R2 (media/documents)
    (Docker Compose for dev; split into K8s deployments/services + managed Redis/S3 for prod)`
      },
      apiExamples: [
        {
          method: 'POST',
          endpoint: '/v1/api/user/register/',
          description: 'Register user (returns pending verification)',
          request: `{
  "email": "user@example.com",
  "password": "Pass1234"
}`,
          response: `{
  "id": "uuid",
  "email": "user@example.com",
  "status": "pending_activation"
}`
        },
        {
          method: 'POST',
          endpoint: '/v1/api/user/account/activate/',
          description: 'Activate account with OTP',
          request: `{
  "email": "user@example.com",
  "otp": "123456"
}`,
          response: `{
  "message": "account activated",
  "user": { "id": "uuid", "email": "user@example.com" }
}`
        },
        {
          method: 'POST',
          endpoint: '/v1/api/appointment/patient/',
          description: 'Create appointment (patient side)',
          request: `{
  "doctor_id": "uuid-doctor",
  "appointment_time": "2025-01-10T14:00:00Z",
  "reason": "routine checkup"
}`,
          response: `{
  "id": 101,
  "patient": {...},
  "doctor": {...},
  "status": "pending",
  "appointment_time": "2025-01-10T14:00:00Z"
}`
        }
      ],
      features: [
        'Registration + OTP activation + JWT access/refresh',
        'Patient profile, list, and self-profile endpoints (patients/me/)',
        'Public doctor listing and doctor profile endpoints',
        'Doctor available-times management and patient-facing availability requests',
        'Full appointment lifecycle with doctor & patient views',
        'Reviews and feedback endpoints',
        'Media uploads with S3/R2 adapter and MEDIA_ROOT for local dev',
        'OpenAPI + Swagger for API exploration'
      ],
      testing:
        'Unit tests for auth, booking, and appointment workflows; integration tests for public endpoints and background tasks. CI runs test suite on PRs; aim for high coverage and regression protection.'
    },
    {
      id: 'library',
      title: 'Library Management System',
      description: 'A comprehensive library management system with book tracking, user management, and borrowing system.',
      stack: ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery'],
      highlights: [
        'RESTful API with JWT authentication',
        'Real-time book availability tracking',
        'Automated overdue notifications',
        'Advanced search with filters'
      ],
      githubUrl: '<github-repo-url>',
      demoUrl: '<live-demo-url>',
      overview:
        'A full-featured library management system designed to handle book inventory, member management, and borrowing workflows. Built with scalability and performance in mind.',
      architecture: {
        erd: `User (id, email, name, role)\n  |\n  | 1:N\n  |\nBorrow (id, user_id, book_id, due_date, status)\n  |\n  | N:1\n  |\nBook (id, title, author, isbn, quantity, available)`,
        deployment: `User Request → Nginx → Gunicorn → Django App\n                                      |\n                                      ├→ PostgreSQL\n                                      ├→ Redis Cache\n                                      └→ Celery Workers`
      },
      apiExamples: [
        {
          method: 'POST',
          endpoint: '/api/auth/login/',
          description: 'User authentication',
          request: `{
  "email": "user@example.com",
  "password": "********"
}`,
          response: `{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}`
        },
        {
          method: 'GET',
          endpoint: '/api/books/?search=python',
          description: 'Search books with filters',
          request: 'No request body',
          response: `{
  "count": 5,
  "results": [
    {
      "id": 1,
      "title": "Python Crash Course",
      "author": "Eric Matthes",
      "isbn": "978-1593279288",
      "available": true
    }
  ]
}`
        }
      ],
      features: [
        'JWT-based authentication system',
        'Book CRUD operations with image upload',
        'Borrowing system with due date tracking',
        'Automated email notifications via Celery',
        'Advanced search with pagination',
        'Admin dashboard for librarians'
      ],
      testing: 'Unit tests with pytest, 85% code coverage. Integration tests for API endpoints. CI/CD pipeline with GitHub Actions.'
    },
    {
      id: 'hireme',
      title: 'HireMe - Job Platform',
      description: 'Job listing platform connecting employers with candidates, featuring application tracking and messaging.',
      stack: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'WebSockets'],
      highlights: [
        'Real-time messaging system',
        'Application status tracking',
        'Resume parsing and matching',
        'Email notifications'
      ],
      githubUrl: '<github-repo-url>',
      demoUrl: '<live-demo-url>',
      overview:
        'A modern job platform that streamlines the hiring process with real-time communication, automated resume parsing, and intelligent job matching.',
      architecture: {
        erd: `Employer (id, company, email)\n  |\n  | 1:N\n  |\nJob (id, title, description, requirements)\n  |\n  | N:N\n  |\nApplication (id, candidate_id, job_id, status)\n  |\n  | N:1\n  |\nCandidate (id, name, email, resume)`,
        deployment: `User → Load Balancer → Django Apps\n                         |\n                         ├→ PostgreSQL\n                         ├→ Redis (WebSocket)\n                         └→ S3 (Resumes)`
      },
      apiExamples: [
        {
          method: 'POST',
          endpoint: '/api/jobs/',
          description: 'Create job listing',
          request: `{
  "title": "Backend Developer",
  "description": "We are looking for...",
  "requirements": ["Python", "Django"],
  "salary_range": "$80k-$120k"
}`,
          response: `{
  "id": 42,
  "title": "Backend Developer",
  "status": "active",
  "created_at": "2024-12-21T10:30:00Z"
}`
        },
        {
          method: 'POST',
          endpoint: '/api/applications/',
          description: 'Submit job application',
          request: `{
  "job_id": 42,
  "cover_letter": "I am excited to apply...",
  "resume": "base64_encoded_file"
}`,
          response: `{
  "id": 123,
  "status": "pending",
  "submitted_at": "2024-12-21T11:00:00Z"
}`
        }
      ],
      features: [
        'Real-time chat using Django Channels',
        'Resume parsing with NLP',
        'Job matching algorithm',
        'Application status workflow',
        'Email and in-app notifications',
        'Admin panel for moderation'
      ],
      testing: 'TDD approach with 80%+ coverage. WebSocket testing with pytest-asyncio.'
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
            <div className="w-20 h-1 bg-[#0EA5A4] mx-auto"></div>
            <p className="mt-4 text-[#94A3B8]">Real-world backend systems I've built</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#0F172A] rounded-lg border border-[#0EA5A4]/20 overflow-hidden hover:border-[#0EA5A4] transition-all hover:shadow-lg hover:shadow-[#0EA5A4]/10 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="h-48 bg-[#0EA5A4]/5 flex items-center justify-center">
                  {project.id === 'clinic-z' ? (
                    <img
                      src={clinicLogo}
                      alt="Clinic-Z Logo"
                      className="h-full object-contain p-4"
                    />
                  ) : (
                    <div className="text-6xl text-[#0EA5A4]/30 group-hover:text-[#0EA5A4]/50 transition-colors">
                      {'</>'}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#0EA5A4] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#0EA5A4]/10 text-[#0EA5A4] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="text-sm text-[#94A3B8] flex items-start">
                        <span className="text-[#0EA5A4] mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-[#0EA5A4]/20">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
