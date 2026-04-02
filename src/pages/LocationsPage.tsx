import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const LOCATIONS = [
  {
    city: 'London',
    region: 'Europe',
    address: '124 Park Lane, Mayfair, London, W1K 7AF',
    phone: '+44 20 7946 0123',
    email: 'london@primenest.com',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000',
    isHQ: true
  },
  {
    city: 'New York',
    region: 'North America',
    address: '725 5th Ave, New York, NY 10022',
    phone: '+1 (212) 555-0198',
    email: 'ny@primenest.com',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000'
  },
  {
    city: 'Miami',
    region: 'North America',
    address: '1000 Biscayne Blvd, Miami, FL 33132',
    phone: '+1 (305) 555-0123',
    email: 'miami@primenest.com',
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=1000'
  },
  {
    city: 'Los Angeles',
    region: 'North America',
    address: '9200 Sunset Blvd, West Hollywood, CA 90069',
    phone: '+1 (310) 555-0199',
    email: 'la@primenest.com',
    image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    city: 'Dubai',
    region: 'Middle East',
    address: 'Burj Khalifa, Downtown Dubai, UAE',
    phone: '+971 4 555 0123',
    email: 'dubai@primenest.com',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function LocationsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32 bg-zinc-900 text-white overflow-hidden px-6">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1449156003053-c30670b9883c?auto=format&fit=crop&q=80&w=2000"
            alt="Global Cities"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Global Presence</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Our <span className="italic text-gold">Global</span> Offices</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Strategically located in the world's most influential real estate markets, 
            our offices provide local expertise with a global perspective.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {LOCATIONS.map((loc, idx) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white border border-zinc-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.city}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-bold">
                    {loc.region}
                  </div>
                  {loc.isHQ && (
                    <div className="absolute top-4 right-4 bg-gold text-zinc-900 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-bold">
                      Global HQ
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-3xl text-zinc-900 mb-6 group-hover:text-gold transition-colors">
                    {loc.city}
                  </h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-4">
                      <MapPin size={18} className="text-gold shrink-0 mt-1" />
                      <p className="text-zinc-500 text-sm leading-relaxed">{loc.address}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone size={18} className="text-gold shrink-0" />
                      <p className="text-zinc-500 text-sm">{loc.phone}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail size={18} className="text-gold shrink-0" />
                      <p className="text-zinc-500 text-sm">{loc.email}</p>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-zinc-900 text-xs uppercase tracking-widest font-bold border-b border-zinc-900 pb-1 hover:text-gold hover:border-gold transition-all"
                  >
                    Contact Office <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-zinc-900 mb-8">A Network Without <span className="italic text-gold">Borders</span></h2>
          <p className="text-zinc-500 text-lg font-light leading-relaxed mb-12">
            Our global network extends beyond our physical offices. We partner with elite local 
            agencies in over 50 countries to ensure our clients have access to the finest 
            properties, regardless of geography.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-100">
            <div>
              <span className="block text-3xl font-serif text-zinc-900 mb-1">50+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Countries</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-zinc-900 mb-1">120+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Partner Agencies</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-zinc-900 mb-1">2,500+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Global Advisors</span>
            </div>
            <div>
              <span className="block text-3xl font-serif text-zinc-900 mb-1">$45B+</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Network Volume</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
