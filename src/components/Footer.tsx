'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  ExternalLink,
  Download,
  FileText,
  Shield,
  Users,
  Globe,
  Send
} from 'lucide-react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: 'About eduroam', href: '#', icon: Users },
    { name: 'Participating Institutions', href: '#', icon: Globe },
    { name: 'Configuration Guide', href: '#', icon: FileText },
    { name: 'Support Center', href: '#', icon: Shield }
  ];

  const resources = [
    { name: 'Download Certificates', href: '#', icon: Download },
    { name: 'Network Statistics', href: '#', icon: FileText },
    { name: 'Technical Documentation', href: '#', icon: ExternalLink },
    { name: 'User Manual', href: '#', icon: FileText }
  ];

  const policies = [
    'Privacy Policy',
    'Terms of Service', 
    'Cookie Policy',
    'Accessibility Statement'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      {/* Newsletter Section */}
      

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold">
                IN
              </div>
              <div>
                <h3 className="font-bold text-orange-400">eduroam India</h3>
                <p className="text-sm text-blue-200">Digital Education</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed">
              Secure wireless network access across educational institutions nationwide. 
              Part of India's Digital Education Initiative.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-blue-200">
                <Mail className="w-4 h-4 text-orange-400" />
                <a href="mailto:support@eduroam.in" className="hover:text-white">
                  support@eduroam.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-blue-200">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>+91-11-2649-4640</span>
              </div>
              <div className="flex items-start gap-3 text-blue-200">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5" />
                <span>Ministry of Communications & IT<br />Government of India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <button 
              onClick={() => toggleSection('links')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <h4 className="font-semibold mb-4 text-orange-400">Quick Links</h4>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${openSection === 'links' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`space-y-3 ${openSection === 'links' ? 'block' : 'hidden'} md:block`}>
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm group"
                  >
                    <IconComponent className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Resources */}
          <div>
            <button 
              onClick={() => toggleSection('resources')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <h4 className="font-semibold mb-4 text-orange-400">Resources</h4>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${openSection === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`space-y-3 ${openSection === 'resources' ? 'block' : 'hidden'} md:block`}>
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <a
                    key={index}
                    href={resource.href}
                    className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors text-sm group"
                  >
                    <IconComponent className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" />
                    {resource.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Policies & Social */}
          <div>
            <button 
              onClick={() => toggleSection('policies')}
              className="flex items-center justify-between w-full md:cursor-default"
            >
              <h4 className="font-semibold mb-4 text-orange-400">Legal & Connect</h4>
              <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${openSection === 'policies' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`${openSection === 'policies' ? 'block' : 'hidden'} md:block`}>
              <div className="space-y-3 mb-6">
                {policies.map((policy, index) => (
                  <a
                    key={index}
                    href="/privacy"
                    className="block text-blue-200 hover:text-white transition-colors text-sm"
                  >
                    {policy}
                  </a>
                ))}
              </div>
              
              <div>
                <h5 className="font-semibold mb-3 text-orange-400 text-sm">Follow Us</h5>
                <div className="flex gap-2">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-8 h-8 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700 bg-blue-900/50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-center sm:text-left">
              <p className="text-blue-200">
                © 2024 eduroam India. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4 text-blue-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Network Online</span>
              </div>
              <span>99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;