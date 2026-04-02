import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Property } from '@/src/data/properties';
import { formatPrice } from '@/src/lib/utils';
import { useSaved } from '@/src/context/SavedContext';
import { cn } from '@/src/lib/utils';

interface PropertyCardProps {
  property: Property;
  index?: number;
  key?: string | number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const { isSaved, toggleSave } = useSaved();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white border border-zinc-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      <Link to={`/property/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur-sm text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-bold">
          {property.type}
        </div>
        {property.isFeatured && (
          <div className="absolute top-4 right-4 bg-gold text-zinc-900 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-bold">
            Featured
          </div>
        )}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSave(property.id);
          }}
          className={cn(
            "absolute bottom-4 right-4 p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 z-10",
            isSaved(property.id) 
              ? "bg-gold text-white border-gold" 
              : "bg-white/20 text-white border-white/30 hover:bg-white hover:text-zinc-900"
          )}
        >
          <Heart size={16} fill={isSaved(property.id) ? "currentColor" : "none"} />
        </button>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="bg-white text-zinc-900 px-6 py-2.5 text-xs uppercase tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            View Details
          </span>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-zinc-900 group-hover:text-gold transition-colors duration-300">
            <Link to={`/property/${property.id}`}>{property.title}</Link>
          </h3>
          <p className="font-serif text-lg font-bold text-zinc-900">
            {formatPrice(property.price)}
          </p>
        </div>
        
        <div className="flex items-center gap-1 text-zinc-500 text-sm mb-6">
          <MapPin size={14} className="text-gold" />
          <span>{property.location}</span>
        </div>

        <div className="grid grid-cols-3 border-t border-zinc-100 pt-6">
          <div className="flex flex-col items-center gap-1 border-r border-zinc-100">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Bed size={16} />
              <span className="text-xs uppercase tracking-tighter">Beds</span>
            </div>
            <span className="font-medium text-zinc-900">{property.beds}</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-r border-zinc-100">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Bath size={16} />
              <span className="text-xs uppercase tracking-tighter">Baths</span>
            </div>
            <span className="font-medium text-zinc-900">{property.baths}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <Maximize size={16} />
              <span className="text-xs uppercase tracking-tighter">Sq Ft</span>
            </div>
            <span className="font-medium text-zinc-900">{property.sqft.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
