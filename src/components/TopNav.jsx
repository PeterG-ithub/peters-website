import { useState } from 'react';
import { Menu, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';

export default function TopNavBar() {
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = useState(false);

  const templates = [
    { name: 'Modern Portfolio', id: 'modern' },
    { name: 'Minimalist', id: 'minimal' },
    { name: 'Creative', id: 'creative' },
    { name: 'Developer', id: 'developer' },
    { name: 'Business', id: 'business' }
  ];

  const navItems = ['about', 'projects', 'skills', 'goals'];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/peter-gabradilla/' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/peter' },
    { name: 'Patreon', icon: ExternalLink, url: 'https://patreon.com/peter' }
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Templates and Name */}
          <div className="flex items-center space-x-6">
            {/* Template Menu */}
            <div className="relative">
              <button
                onClick={() => setIsTemplateMenuOpen(!isTemplateMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                <Menu size={20} />
                <span className="font-medium">Templates</span>
                <ChevronDown size={16} className={`transform transition-transform ${isTemplateMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isTemplateMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => {
                          setIsTemplateMenuOpen(false);
                          // Handle template selection here
                          console.log(`Selected template: ${template.name}`);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                      >
                        {template.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Name */}
            <div className="text-xl font-bold text-gray-900">
              peter.
            </div>
          </div>

          {/* Center - Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 hover:underline underline-offset-4"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  title={social.name}
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close template menu */}
      {isTemplateMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsTemplateMenuOpen(false)}
        />
      )}
    </nav>
  );
}