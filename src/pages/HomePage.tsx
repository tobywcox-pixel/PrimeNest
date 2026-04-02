import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ArrowRight, Star, Quote, Shield, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { PROPERTIES } from '@/src/data/properties';
import PropertyCard from '@/src/components/PropertyCard';

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const featuredProperties = PROPERTIES.filter(p => p.isFeatured);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/listings?q=${searchQuery}`);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Home"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6">
              Exclusivity
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 leading-[1.1] tracking-tight max-w-4xl">
              Your Journey to <br />
              <span className="italic">Extraordinary Living</span> Starts Here
            </h1>

            <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-4 md:p-6 border border-white/20 shadow-2xl">
              <form 
                onSubmit={handleSearch}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="flex-[2] flex items-center px-4 md:px-6 gap-3 md:gap-4 bg-white/10 border border-white/10 focus-within:border-gold transition-colors group">
                  <Search size={20} className="text-gold group-focus-within:scale-110 transition-transform shrink-0" />
                  <input
                    type="text"
                    placeholder="Where would you like to live?"
                    className="w-full py-4 md:py-5 bg-transparent text-white placeholder:text-white/40 focus:outline-none text-base md:text-lg font-light"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex-1 flex items-center px-4 md:px-6 gap-3 md:gap-4 bg-white/10 border border-white/10">
                  <MapPin size={18} className="text-gold/50 shrink-0" />
                  <select className="bg-transparent text-white text-sm focus:outline-none w-full appearance-none cursor-pointer py-4 md:py-5">
                    <option className="bg-zinc-900" value="">All Locations</option>
                    <option className="bg-zinc-900" value="miami">Miami</option>
                    <option className="bg-zinc-900" value="la">Los Angeles</option>
                    <option className="bg-zinc-900" value="london">London</option>
                    <option className="bg-zinc-900" value="ny">New York</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="bg-gold text-zinc-900 px-8 md:px-12 py-4 md:py-5 uppercase tracking-[0.2em] text-xs md:text-sm font-bold hover:bg-white hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg"
                >
                  Find Property
                </button>
              </form>
              
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                <span className="text-white/60">Popular:</span>
                <button onClick={() => setSearchQuery('Penthouse')} className="hover:text-gold transition-colors">Penthouses</button>
                <button onClick={() => setSearchQuery('Villa')} className="hover:text-gold transition-colors">Beachfront Villas</button>
                <button onClick={() => setSearchQuery('London')} className="hover:text-gold transition-colors">London Estates</button>
                <button onClick={() => setSearchQuery('Modern')} className="hover:text-gold transition-colors">Modern Lofts</button>
              </div>
            </div>

            <p className="mt-12 text-white/50 text-sm font-light tracking-widest uppercase">
              Trusted by over 5,000 global investors
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                Curated Selection
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-zinc-900">
                Featured <span className="italic">Masterpieces</span>
              </h2>
            </div>
            <Link 
              to="/listings" 
              className="group flex items-center gap-2 text-zinc-900 text-xs uppercase tracking-widest font-bold hover:text-gold transition-colors"
            >
              View All Listings <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, idx) => (
              <PropertyCard key={property.id} property={property} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-zinc-950 text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 transform translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">
                The PrimeNest Standard
              </span>
              <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
                Why Discerning Buyers <br />
                <span className="italic text-gold">Choose Us</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 border border-gold/30 flex items-center justify-center text-gold">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-white">Unrivaled Trust</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      With over three decades of experience in high-end real estate, 
                      we provide a foundation of integrity and discretion for every transaction.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 border border-gold/30 flex items-center justify-center text-gold">
                    <Award size={28} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-white">Expert Guidance</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Our advisors are more than agents; they are strategic partners 
                      dedicated to securing your legacy through intelligent property acquisition.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 shrink-0 border border-gold/30 flex items-center justify-center text-gold">
                    <Sparkles size={28} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2 text-white">Seamless Experience</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      From initial viewing to final closing, we handle every detail with 
                      meticulous precision, ensuring a fluid and effortless journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative z-10 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000"
                  alt="Luxury Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 border-2 border-gold/20 -z-0" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-50 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">
            Client Experiences
          </span>
          <h2 className="text-4xl font-serif text-zinc-900 mb-16">
            Voices of <span className="italic">Excellence</span>
          </h2>

          <div className="relative">
            <Quote className="absolute -top-10 -left-10 text-gold/10 w-24 h-24" />
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-white p-12 shadow-sm border border-zinc-100"
              >
                <div className="flex justify-center gap-1 mb-6 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xl font-serif text-zinc-700 italic leading-relaxed mb-8">
                  "PrimeNest Realty didn't just find us a house; they found us a sanctuary. 
                  Their attention to our specific lifestyle needs was truly remarkable. 
                  The most professional real estate experience we've ever had."
                </p>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-zinc-900 uppercase tracking-widest text-xs">James & Sarah Wellington</span>
                  <span className="text-zinc-400 text-[10px] uppercase tracking-widest mt-1">International Investors</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-zinc-900 relative overflow-hidden px-6">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600607687940-47a04b629571?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Ready to Discover Your <br />
            <span className="italic text-gold">Next Chapter?</span>
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto font-light">
            Join our exclusive circle of clients and gain access to off-market 
            opportunities and bespoke property services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/listings"
              className="bg-gold text-zinc-900 px-10 py-5 uppercase tracking-widest text-xs font-bold hover:bg-white transition-all duration-300"
            >
              Browse Listings
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border border-white/30 text-white px-10 py-5 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-zinc-900 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
