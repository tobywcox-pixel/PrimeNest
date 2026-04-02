import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
                <span className="font-serif text-xl font-bold text-gold">P</span>
              </div>
              <span className="font-serif text-2xl tracking-tighter font-bold">
                PrimeNest<span className="text-gold">.</span>
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              The global leader in luxury real estate, providing bespoke services 
              for the world's most discerning property buyers and investors.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="text-zinc-500 hover:text-gold transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Properties', 'About Us', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-zinc-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-8">Global Offices</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link to="/locations" className="hover:text-white transition-colors">London (HQ)</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">New York</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">Miami</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">Los Angeles</Link></li>
              <li><Link to="/locations" className="hover:text-white transition-colors">Dubai</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gold mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-gold shrink-0" />
                <span className="text-zinc-400 text-sm">124 Park Lane, Mayfair, London</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={18} className="text-gold shrink-0" />
                <span className="text-zinc-400 text-sm">+44 20 7946 0123</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={18} className="text-gold shrink-0" />
                <span className="text-zinc-400 text-sm">concierge@primenest.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © 2026 PrimeNest Realty. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-zinc-600 text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
