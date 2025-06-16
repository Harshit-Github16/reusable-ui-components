import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            Logo
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </Link>
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
          <Link href="/" className="block text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="block text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="/services" className="block text-gray-600 hover:text-gray-900 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 