import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, Check, Phone, Mail, ChevronLeft, ChevronRight, Share2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROPERTIES } from '@/src/data/properties';
import { formatPrice, cn } from '@/src/lib/utils';
import InquiryForm from '@/src/components/InquiryForm';
import { useSaved } from '@/src/context/SavedContext';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const { isSaved, toggleSave } = useSaved();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl font-serif mb-4">Property Not Found</h2>
        <Link to="/listings" className="text-gold hover:underline">Return to Listings</Link>
      </div>
    );
  }

  const nextImage = () => setActiveImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="pt-20">
      {/* Gallery Section */}
      <section className="relative h-[70vh] bg-zinc-900 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            src={property.images[activeImage]}
            alt={property.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Gallery Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-6">
          <button onClick={prevImage} className="p-4 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-zinc-900 transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextImage} className="p-4 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-zinc-900 transition-all">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Gallery Info */}
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="text-white">
            <div className="flex items-center gap-2 text-gold text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-2">
              <MapPin size={12} className="md:w-[14px] md:h-[14px]" /> {property.location}
            </div>
            <h1 className="text-3xl md:text-6xl font-serif leading-tight">{property.title}</h1>
          </div>
          <div className="flex gap-3 md:gap-4">
            <button 
              onClick={() => toggleSave(property.id)}
              className={cn(
                "p-3 md:p-4 backdrop-blur-md border border-white/20 transition-all",
                isSaved(property.id) ? "bg-gold text-zinc-900 border-gold" : "bg-white/10 text-white hover:bg-white/20"
              )}
            >
              <Heart size={18} className="md:w-5 md:h-5" fill={isSaved(property.id) ? "currentColor" : "none"} />
            </button>
            <button className="p-3 md:p-4 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all">
              <Share2 size={18} className="md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Image Counter */}
        <div className="absolute top-6 right-6 md:top-auto md:bottom-10 md:left-1/2 md:-translate-x-1/2 bg-black/40 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
          {activeImage + 1} / {property.images.length}
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-zinc-100">
              <div className="text-center">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Bedrooms</span>
                <span className="text-2xl font-serif text-zinc-900">{property.beds}</span>
              </div>
              <div className="text-center border-x border-zinc-100">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Bathrooms</span>
                <span className="text-2xl font-serif text-zinc-900">{property.baths}</span>
              </div>
              <div className="text-center">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-400 mb-1">Square Feet</span>
                <span className="text-2xl font-serif text-zinc-900">{property.sqft.toLocaleString()}</span>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-zinc-900 mb-6">About the <span className="italic text-gold">Property</span></h2>
              <p className="text-zinc-600 leading-relaxed text-lg font-light">
                {property.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-zinc-900 mb-8">Features & <span className="italic text-gold">Amenities</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-700">
                    <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-serif text-zinc-900 mb-6">Location</h2>
              <div className="aspect-video bg-zinc-100 relative overflow-hidden group">
                <img 
                  src={`https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200`} 
                  alt="Map Placeholder"
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 shadow-xl flex flex-col items-center gap-2">
                    <MapPin className="text-gold" size={32} />
                    <span className="text-xs uppercase tracking-widest font-bold text-zinc-900">{property.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry */}
          <div className="space-y-8">
            <div className="bg-zinc-950 text-white p-8 sticky top-28">
              <div className="mb-8">
                <span className="text-gold text-[10px] uppercase tracking-widest font-bold block mb-2">Listing Price</span>
                <span className="text-4xl font-serif">{formatPrice(property.price)}</span>
              </div>
              
              <InquiryForm propertyTitle={property.title} className="mb-8" />

              <div className="border-t border-white/10 pt-8">
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={property.agent.image} 
                    alt={property.agent.name} 
                    className="w-16 h-16 object-cover border border-gold/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-gold text-[10px] uppercase tracking-widest font-bold block">Listing Agent</span>
                    <span className="text-lg font-serif">{property.agent.name}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href={`tel:${property.agent.phone}`} className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm">
                    <Phone size={16} /> {property.agent.phone}
                  </a>
                  <a href={`mailto:${property.agent.email}`} className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm">
                    <Mail size={16} /> {property.agent.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

