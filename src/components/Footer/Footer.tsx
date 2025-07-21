import React from 'react';
import { Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    properties: [
      { name: 'Office Properties', href: '/office' },
      { name: 'Residential Properties', href: '/residential' },
    ],
    team: [
      { name: 'Directors', href: '/directors' },
      { name: 'Executive Team', href: '/executive' },
      { name: 'Management Team', href: '/management' },
    ],
    financials: [
      { name: '2024', href: '/financials-2024' },
      { name: '2023', href: '/financials-2023' },
      { name: '2022', href: '/financials-2022' },
      { name: 'Pensions', href: '/pensions' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Use', href: '#terms' },
      { name: 'Modern Slavery Statement', href: '#slavery' },
    ],
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/Freshwater.png" 
                alt="Freshwater Group" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Premier real estate management with over 25 years of experience in the UK property market.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <PhoneCall className="w-4 h-4 mr-2 text-blue-400" />
                <span>020 7836 1555</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span>info@highdorn.co.uk</span>
              </div>
              <div className="flex items-start text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>158-162 Shaftesbury Avenue<br />London, WC2H 8HR</span>
              </div>
            </div>
          </div>

          {/* Properties Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Properties</h3>
            <ul className="space-y-2">
              {footerLinks.properties.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Team Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Team</h3>
            <ul className="space-y-2">
              {footerLinks.team.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Financials Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Financials</h3>
            <ul className="space-y-2">
              {footerLinks.financials.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Highdorn Co. Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Part of Freshwater Group</span>
              <span>Registered in England: 603121</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;