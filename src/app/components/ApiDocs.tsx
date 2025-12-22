import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { CodeBlock } from './CodeBlock';

export function ApiDocs() {
  const endpoints = [
    {
      method: 'POST',
      path: '/api/auth/register/',
      description: 'Register a new user account',
      request: `{
  "email": "user@example.com",
  "password": "SecurePassword123!",
  "name": "John Doe"
}`,
      response: `{
  "id": 1,
  "email": "user@example.com",
  "name": "John Doe",
  "message": "Registration successful"
}`,
      status: '201 Created'
    },
    {
      method: 'POST',
      path: '/api/auth/login/',
      description: 'Authenticate user and get JWT tokens',
      request: `{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}`,
      response: `{
  "access": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "id": 1,
    "email": "user@example.com",
    "name": "John Doe"
  }
}`,
      status: '200 OK'
    },
    {
      method: 'GET',
      path: '/api/items/?page=1&search=keyword',
      description: 'List items with pagination and search',
      request: 'No request body required',
      response: `{
  "count": 100,
  "next": "http://api.example.com/api/items/?page=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "title": "Sample Item",
      "description": "Item description",
      "created_at": "2024-12-21T10:00:00Z"
    }
  ]
}`,
      status: '200 OK'
    },
    {
      method: 'POST',
      path: '/api/items/',
      description: 'Create a new item',
      request: `{
  "title": "New Item",
  "description": "Item description",
  "category": "electronics",
  "price": 99.99
}`,
      response: `{
  "id": 42,
  "title": "New Item",
  "description": "Item description",
  "category": "electronics",
  "price": 99.99,
  "created_at": "2024-12-21T10:30:00Z",
  "updated_at": "2024-12-21T10:30:00Z"
}`,
      status: '201 Created'
    },
    {
      method: 'PATCH',
      path: '/api/items/{id}/',
      description: 'Partially update an item',
      request: `{
  "price": 89.99,
  "description": "Updated description"
}`,
      response: `{
  "id": 42,
  "title": "New Item",
  "description": "Updated description",
  "category": "electronics",
  "price": 89.99,
  "created_at": "2024-12-21T10:30:00Z",
  "updated_at": "2024-12-21T11:00:00Z"
}`,
      status: '200 OK'
    },
    {
      method: 'DELETE',
      path: '/api/items/{id}/',
      description: 'Delete an item',
      request: 'No request body required',
      response: `{
  "message": "Item deleted successfully"
}`,
      status: '204 No Content'
    }
  ];

  const getMethodColor = (method: string) => {
    const colors: Record<string, string> = {
      GET: 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      POST: 'bg-green-500/20 text-green-400 border-green-400/30',
      PUT: 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
      PATCH: 'bg-orange-500/20 text-orange-400 border-orange-400/30',
      DELETE: 'bg-red-500/20 text-red-400 border-red-400/30'
    };
    return colors[method] || 'bg-gray-500/20 text-gray-400 border-gray-400/30';
  };

  return (
    <section id="api-docs" className="py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">API Documentation Preview</h2>
          <div className="w-20 h-1 bg-[#0EA5A4] mx-auto"></div>
          <p className="mt-4 text-[#94A3B8]">Sample API endpoints and response examples</p>
        </div>

        <div className="bg-[#0F172A] rounded-lg border border-[#0EA5A4]/20 p-6">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Base URL</h3>
            <code className="text-[#0EA5A4] bg-[#1E293B] px-4 py-2 rounded inline-block">
              https://api.example.com
            </code>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Authentication</h3>
            <div className="bg-[#1E293B] p-4 rounded-lg border border-[#0EA5A4]/20">
              <p className="text-[#94A3B8] mb-2">All endpoints require JWT authentication except registration and login.</p>
              <p className="text-sm text-[#94A3B8]">Include token in header:</p>
              <code className="text-[#0EA5A4] text-sm">Authorization: Bearer &lt;your-token&gt;</code>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-4">Endpoints</h3>
          <Accordion type="single" collapsible className="space-y-3">
            {endpoints.map((endpoint, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-[#1E293B] border border-[#0EA5A4]/20 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 hover:no-underline hover:bg-[#0EA5A4]/5">
                  <div className="flex items-center gap-4 w-full">
                    <span className={`px-3 py-1 rounded text-sm font-mono border ${getMethodColor(endpoint.method)}`}>
                      {endpoint.method}
                    </span>
                    <code className="text-[#0EA5A4] font-mono text-left">{endpoint.path}</code>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4 pt-4">
                    <div>
                      <p className="text-[#94A3B8] mb-3">{endpoint.description}</p>
                      <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded">
                        {endpoint.status}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Request</h4>
                        <CodeBlock code={endpoint.request} language="json" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Response</h4>
                        <CodeBlock code={endpoint.response} language="json" />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
