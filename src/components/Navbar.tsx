import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Phone, Info, Search, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/listings' },
    { name: 'Locations', path: '/locations' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        scrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className={cn(
            "w-10 h-10 border-2 flex items-center justify-center transition-colors duration-300",
            scrolled || !isHome ? "border-zinc-900 group-hover:border-gold" : "border-white group-hover:border-gold"
          )}>
            <span className={cn(
              "font-serif text-xl font-bold",
              scrolled || !isHome ? "text-zinc-900" : "text-white"
            )}>P</span>
          </div>
          <span className={cn(
            "font-serif text-2xl tracking-tighter font-bold transition-colors duration-300",
            scrolled || !isHome ? "text-zinc-900" : "text-white"
          )}>
            PrimeNest<span className="text-gold">.</span>
          </span>
        </Link>

        <div className="hidden md:block ml-8">
          <Link
            to="/listings"
            className={cn(
              "px-6 py-2.5 text-xs uppercase tracking-widest font-bold transition-all duration-300 border",
              scrolled || !isHome 
                ? "bg-zinc-900 text-white border-zinc-900 hover:bg-gold hover:border-gold" 
                : "bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white hover:text-zinc-900"
            )}
          >
            Inquire Now
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:text-gold relative group",
                scrolled || !isHome ? "text-zinc-600" : "text-white/90"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={cn(scrolled || !isHome ? "text-zinc-900" : "text-white")} />
          ) : (
            <Menu className={cn(scrolled || !isHome ? "text-zinc-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden border-t border-zinc-100"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-zinc-800 hover:text-gold transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                </Link>
              ))}
              <div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
                <Link
                  to="/listings"
                  onClick={() => setIsOpen(false)}
                  className="bg-zinc-900 text-white text-center py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold transition-colors"
                >
                  Inquire Now
                </Link>
                <Link
                  to="/listings"
                  onClick={() => setIsOpen(false)}
                  className="border border-zinc-200 text-zinc-900 text-center py-5 uppercase tracking-[0.2em] text-xs font-bold hover:bg-zinc-50 transition-colors"
                >
                  Browse Properties
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
