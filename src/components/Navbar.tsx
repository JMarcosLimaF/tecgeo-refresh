
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: isHomePage ? '#home' : '/' },
    { name: 'Serviços', href: isHomePage ? '#services' : '/#services' },
    { name: 'Sobre', href: isHomePage ? '#about' : '/#about' },
    { name: 'Projetos', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'Contato', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const renderNavLink = (link: { name: string; href: string }) => {
    if (link.href.startsWith('#')) {
      // Internal anchor link on same page
      return (
        <a
          href={link.href}
          className="font-medium text-tecgeo-blue hover:text-tecgeo-teal underline-animation"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.name}
        </a>
      );
    } else if (link.href.includes('#')) {
      // Link to home page with hash
      return (
        <Link
          to={link.href}
          className="font-medium text-tecgeo-blue hover:text-tecgeo-teal underline-animation"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.name}
        </Link>
      );
    } else {
      // Normal page link
      return (
        <Link
          to={link.href}
          className="font-medium text-tecgeo-blue hover:text-tecgeo-teal underline-animation"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.name}
        </Link>
      );
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2'
          : 'bg-transparent'
      )}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8699636b-3def-4c0d-ac54-afb97b3f7a58.png" 
            alt="TecGEO Logo" 
            className="h-10 md:h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              {renderNavLink(link)}
            </React.Fragment>
          ))}
          {location.pathname !== '/carreiras' && (
            <Link
              to="/carreiras"
              className="px-5 py-2 rounded-full bg-tecgeo-teal text-white font-medium hover:bg-tecgeo-blue hover:shadow-lg transition-all"
            >
              Fale Conosco
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-tecgeo-blue"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden absolute left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out transform',
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="section-container py-6 space-y-4">
          {navLinks.map((link) => (
            <React.Fragment key={link.name}>
              {renderNavLink(link)}
            </React.Fragment>
          ))}
          {location.pathname !== '/carreiras' && (
            <Link
              to="/carreiras"
              className="block w-full text-center px-5 py-2 rounded-full bg-tecgeo-teal text-white font-medium hover:bg-tecgeo-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
