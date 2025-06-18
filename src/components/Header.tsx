'use client'
import React from 'react';

interface HeaderProps {
  logoText?: string;
  logoHref?: string;
  navItems?: Array<{
    label: string;
    href: string;
  }>;
  onLogoClick?: () => void;
  onNavItemClick?: (href: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  logoText = "Logo",
  logoHref = "/",
  navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" }
  ],
  onLogoClick,
  onNavItemClick
}) => {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (onLogoClick) {
      e.preventDefault();
      onLogoClick();
    }
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (onNavItemClick) {
      e.preventDefault();
      onNavItemClick(href);
    }
  };

  return (
    <header className="tw-bg-red-100 shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href={logoHref} 
            className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
            onClick={handleLogoClick}
          >
            {logoText}
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        <div className="hidden md:hidden mt-4 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={(e) => handleNavClick(item.href, e)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header; 