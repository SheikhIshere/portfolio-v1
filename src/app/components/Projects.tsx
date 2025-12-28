import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
// import { ProjectModal } from './ProjectModal';
import clinicLogo from '../../asset/clinic-z-logo.png';
import genuLogo from '../../asset/genu-library.png';
import recipeLogo from '../../asset/recipe-logo.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  LiveUrl?: string;
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
  logo?: string; // optional logo field (imported image)
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'clinic-z',
      title: 'Clinic-Z - Smart Hospital Management System',
      description: 'Clinic-z a smart hospital management backend system with DRF',
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
      LiveUrl: 'https://cliniz-api-drf.onrender.com',
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
        'Unit tests for auth, booking, and appointment workflows; integration tests for public endpoints and background tasks. CI runs test suite on PRs; aim for high coverage and regression protection.',
      logo: clinicLogo
    },
    {
      id: 'library',
      title: 'Genu Library - Digital Library Platform',
      description: 'Modern, feature-rich digital library platform built with Django & Tailwind CSS for managing, sharing, and discovering books.',
      stack: ['Django', 'Python', 'Tailwind CSS', 'SQLite/PostgreSQL'],
      highlights: [
        'Book upload & automatic cover generation',
        'Smart multi-field search (title, author, tags, uploader)',
        'User profiles with avatars and social links',
        'Ratings, favorites, playlists, comments & reviews',
        'Responsive design with dark/light theme',
        'Real-time search suggestions with AJAX',
        'Admin tools: bulk uploads, tag management, featured books'
      ],
      githubUrl: 'https://github.com/SheikhIshere/Library',
      LiveUrl: 'https://genu-library-by-imran.onrender.com/',
      overview:
        'A full web app for digital library management: upload PDFs, manage users, rate/review books, create playlists, and engage with the community. Built with scalability, performance, and interactive UI in mind.',
      architecture: {
        erd: `User (id, username, email)
  | 1:1
Profile (avatar, balance, social_link)
  |
Book (id, title, author, uploader, price, visibility, tags, slug, upload_date, cover)
  | 1:N
BookRating (user, book, rating)
BookFavorite (user, book)
Comment (user, book, content)
Playlist (user, books)
Report (user, book, reason)`,
        deployment: `User → Nginx → Gunicorn → Django
  ├→ SQLite/PostgreSQL
  ├→ Redis (optional caching)
  ├→ Celery (email notifications, bulk tasks)
  └→ Static/Media handling (local or S3/R2)`
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
  "access": "<jwt-access-token>",
  "refresh": "<jwt-refresh-token>",
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
        'PDF book upload & automatic cover generation',
        'Multi-field search by title, author, tags, uploader',
        'User profiles with avatar, balance, social links',
        'Rating, favorites, playlists, comments & reviews',
        'Admin tools for bulk upload, tags, featured books',
        'Responsive dark/light UI built with Tailwind',
        'Real-time AJAX search suggestions'
      ],
      testing:
        'Unit tests for auth, book CRUD, ratings, favorites, playlists; integration tests for search, comments, and admin features. CI/CD pipelines recommended.',
      logo: genuLogo
    },
    {
      id: 'recipe-api',
      title: 'Recipe API 🍳',
      description: 'A robust, well-tested RESTful API for managing recipes with full CRUD operations, authentication, and image uploads.',
      stack: ['Django', 'DRF', 'Docker', 'PostgreSQL'],
      highlights: [
        'Token-based auth with custom email user model',
        'Full CRUD for recipes with image uploads & filtering',
        'Tag & ingredient management system',
        'Interactive Swagger/OpenAPI docs',
        'Production-ready Docker setup',
        '1000+ lines of comprehensive tests'
      ],
      githubUrl: 'https://github.com/SheikhIshere/django-recipe-api',
      demoUrl: '<live-demo-url>',
      overview:
        'A full-featured RESTful API for recipe management: secure authentication, recipe CRUD with images, tag & ingredient management, filtering, and comprehensive testing.',
      architecture: {
        erd: `User (id, email, name)
      | 1:1
    Profile (optional avatar, balance, social links)
      |
    Recipe (id, title, time_minutes, price, tags, ingredients, image)
    Tag (id, name)
    Ingredient (id, name)
    RecipeTag (recipe_id, tag_id)
    RecipeIngredient (recipe_id, ingredient_id)`,
        deployment: `User → Nginx → Gunicorn → Django
      ├→ PostgreSQL
      ├→ Redis (optional caching)
      ├→ Celery (email notifications, background tasks)
      └→ Media/Static handling (local or S3/R2)
    (Docker Compose for dev; production-ready containerization)`
      },
      apiExamples: [
        {
          method: 'POST',
          endpoint: '/api/users/',
          description: 'User registration',
          request: `{
      "email": "user@example.com",
      "password": "Pass1234"
    }`,
          response: `{
      "id": 1,
      "email": "user@example.com",
      "status": "pending_activation"
    }`
        },
        {
          method: 'POST',
          endpoint: '/api/users/token/',
          description: 'Obtain auth token',
          request: `{
      "email": "user@example.com",
      "password": "Pass1234"
    }`,
          response: `{
      "access": "<jwt-access-token>",
      "refresh": "<jwt-refresh-token>"
    }`
        },
        {
          method: 'POST',
          endpoint: '/api/recipes/',
          description: 'Create a recipe',
          request: `{
      "title": "Pasta Carbonara",
      "time_minutes": 30,
      "price": 12.50,
      "tags": [1, 2],
      "ingredients": [1, 3, 5]
    }`,
          response: `{
      "id": 101,
      "title": "Pasta Carbonara",
      "time_minutes": 30,
      "price": 12.50,
      "tags": [...],
      "ingredients": [...],
      "image": "pasta.png"
    }`
        }
      ],
      features: [
        'Token-based authentication with custom email user model',
        'Recipe CRUD with image uploads and filtering',
        'Tag & ingredient management',
        'Interactive Swagger/OpenAPI documentation',
        'Production-ready Docker containerization',
        'Extensive automated tests'
      ],
      testing:
        '1000+ lines of unit and integration tests: model, API endpoints, authentication, serializer validation, image uploads, filter/search functionality.',
      logo: recipeLogo
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
                  {project.logo ? (
                    <img src={project.logo} alt={`${project.title} Logo`} className="h-full w-auto object-contain p-4" />
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
                      <span key={idx} className="px-3 py-1 bg-[#0EA5A4]/10 text-[#0EA5A4] rounded-full text-sm">
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
                    {project.LiveUrl && (
                      <a
                        href={project.LiveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#94A3B8] hover:text-[#0EA5A4] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live</span>
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
