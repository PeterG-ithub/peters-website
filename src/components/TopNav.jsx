import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { HiMenu } from 'react-icons/hi';
import { LuLayoutTemplate } from 'react-icons/lu';

export default function TopNavBar() {
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = useState(false);
const [activeTab, setActiveTab] = useState('layout');

  const layouts = [
    { name: 'Modern Portfolio', id: 'modern' },
    { name: 'Minimalist', id: 'minimal' },
    { name: 'Creative', id: 'creative' },
    { name: 'Developer', id: 'developer' },
    { name: 'Business', id: 'business' }
  ];

  const contentProfiles = [
    { name: 'Generic', id: 'generic' },
    { name: 'Software Engineer', id: 'software-engineer' },
    { name: 'Computer Engineer', id: 'computer-engineer' }
  ];
  
  const navItems = ['about', 'skills' ,'projects', 'goals'];

  const socialLinks = [
    { name: 'LinkedIn', Icon: FiLinkedin, url: 'https://linkedin.com/in/peter' },
    { name: 'GitHub', Icon: FiGithub, url: 'https://github.com/peter' },
    { name: 'Patreon', Icon: ExternalLink, url: 'https://patreon.com/peter' }
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
                className="flex items-center px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                <LuLayoutTemplate size={20} />
              </button>
              
              {/* Dropdown Menu */}
              {isTemplateMenuOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  {/* Tab Headers */}
                  <div className="flex border-b border-gray-200">
                    <button
                      onClick={() => setActiveTab('layout')}
                      className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        activeTab === 'layout'
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      Layout
                    </button>
                    <button
                      onClick={() => setActiveTab('content')}
                      className={`flex-1 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        activeTab === 'content'
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      Content
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="p-2">
                    {activeTab === 'layout' && (
                      <div className="grid grid-cols-2 gap-3">
                        {layouts.map((layout) => (
                          <button
                            key={layout.id}
                            onClick={() => {
                              setIsTemplateMenuOpen(false);
                              console.log(`Selected layout: ${layout.name}`);
                            }}
                            className="flex flex-col items-center p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors duration-200"
                          >
                            <div className="w-20 h-24 mb-2 bg-gray-200 rounded border border-gray-300 flex items-center justify-center overflow-hidden">
                              {layout.id === 'modern' ? (
                                <img 
                                  src="/images/layout-modern.png" 
                                  alt={`${layout.name} preview`}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <span className="text-xs text-gray-500">Preview</span>
                              )}
                            </div>
                            <span className="text-xs font-medium text-center leading-tight">{layout.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {activeTab === 'content' && contentProfiles.map((profile) => (
                      <button
                        key={profile.id}
                        onClick={() => {
                          setIsTemplateMenuOpen(false);
                          console.log(`Selected content: ${profile.name}`);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 rounded-md"
                      >
                        {profile.name}
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
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                title={social.name}
              >
                <social.Icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md">
              <HiMenu size={20} />
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