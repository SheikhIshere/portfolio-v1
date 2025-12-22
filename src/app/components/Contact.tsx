import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#0EA5A4] mx-auto"></div>
          <p className="mt-4 text-[#94A3B8]">Let's discuss your next project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-[#94A3B8] mb-8">
                I'm available for freelance work, full-time opportunities, and exciting projects.
                Feel free to reach out via email or connect with me on social media.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:thesheikh255@gmail.com"
                className="flex items-center gap-4 p-4 bg-[#0F172A] rounded-lg border border-[#0EA5A4]/20 hover:border-[#0EA5A4] transition-all group"
              >
                <div className="p-3 bg-[#0EA5A4]/10 rounded-lg group-hover:bg-[#0EA5A4]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#0EA5A4]" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-[#94A3B8]">thesheikh255@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/imran-rafi-0a7955293/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0F172A] rounded-lg border border-[#0EA5A4]/20 hover:border-[#0EA5A4] transition-all group"
              >
                <div className="p-3 bg-[#0EA5A4]/10 rounded-lg group-hover:bg-[#0EA5A4]/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-[#0EA5A4]" />
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <div className="text-[#94A3B8]">linkedin.com/in/imran-rafi-0a7955293/</div>
                </div>
              </a>

              <a
                href="https://github.com/sheikhishere/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0F172A] rounded-lg border border-[#0EA5A4]/20 hover:border-[#0EA5A4] transition-all group"
              >
                <div className="p-3 bg-[#0EA5A4]/10 rounded-lg group-hover:bg-[#0EA5A4]/20 transition-colors">
                  <Github className="w-6 h-6 text-[#0EA5A4]" />
                </div>
                <div>
                  <div className="text-white font-semibold">GitHub</div>
                  <div className="text-[#94A3B8]">github.com/sheikhishere</div>
                </div>
              </a>
            </div>

            <div className="bg-[#0F172A] p-6 rounded-lg border border-[#0EA5A4]/20">
              <h4 className="text-white font-semibold mb-3">Availability</h4>
              <p className="text-[#94A3B8]">
                Currently <span className="text-[#0EA5A4]">available</span> for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0F172A] p-8 rounded-lg border border-[#0EA5A4]/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-[#1E293B] border-[#0EA5A4]/20 text-white placeholder:text-[#94A3B8]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-[#1E293B] border-[#0EA5A4]/20 text-white placeholder:text-[#94A3B8]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-[#1E293B] border-[#0EA5A4]/20 text-white placeholder:text-[#94A3B8]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-[#1E293B] border-[#0EA5A4]/20 text-white placeholder:text-[#94A3B8] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0EA5A4]/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
