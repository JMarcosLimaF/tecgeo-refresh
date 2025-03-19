
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

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
        <a href="#" className="flex items-center">
          <span className="font-display text-2xl font-bold text-tecgeo-blue">
            Tec<span className="text-tecgeo-teal">GEO</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-tecgeo-blue hover:text-tecgeo-teal underline-animation"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-tecgeo-teal text-white font-medium hover:bg-tecgeo-blue hover:shadow-lg transition-all"
          >
            Fale Conosco
          </a>
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
            <a
              key={link.name}
              href={link.href}
              className="block py-2 font-medium text-tecgeo-blue hover:text-tecgeo-teal"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full text-center px-5 py-2 rounded-full bg-tecgeo-teal text-white font-medium hover:bg-tecgeo-blue transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
