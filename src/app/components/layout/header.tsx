'use client';

import { Menu, X } from 'lucide-react';
import * as React from 'react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Thoughts', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-stone-50/90 backdrop-blur-md border-b border-stone-200 py-4' : 'bg-transparent py-8'}`}
    >
      <div className='px-6 md:px-12 lg:px-24 flex justify-between items-center'>
        <a
          href='#'
          className='font-serif font-bold text-2xl text-stone-900 tracking-tight hover:opacity-80 transition-opacity'
        >
          riothinks.
        </a>

        {/* Desktop Nav */}
        <nav className='hidden md:flex gap-10'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors font-sans tracking-wide'
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className='md:hidden text-stone-900'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-stone-50 border-b border-stone-200 p-8 md:hidden shadow-xl'>
          <div className='flex flex-col gap-6'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-xl font-serif font-medium text-stone-800'
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
