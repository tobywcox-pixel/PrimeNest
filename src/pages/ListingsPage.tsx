import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROPERTIES, Property } from '@/src/data/properties';
import PropertyCard from '@/src/components/PropertyCard';
import { cn } from '@/src/lib/utils';

export default function ListingsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000000]);
  const [beds, setBeds] = useState<number | 'All'>('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = propertyType === 'All' || p.type === propertyType;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesBeds = beds === 'All' || p.beds >= (beds as number);
      
      return matchesSearch && matchesType && matchesPrice && matchesBeds;
    });
  }, [searchQuery, propertyType, priceRange, beds]);

  const propertyTypes = ['All', 'Apartment', 'House', 'Villa', 'Penthouse'];

  return (
    <div className="pt-24 min-h-screen bg-zinc-50">
      {/* Header */}
      <div className="bg-white border-b border-zinc-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
            Exclusive Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8">
            Our <span className="italic">Properties</span>
          </h1>

          {/* Search & Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input
                type="text"
                placeholder="Search by location or name..."
                className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 focus:outline-none focus:border-gold transition-colors text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white uppercase tracking-widest text-xs font-bold hover:bg-gold transition-colors"
            >
              <SlidersHorizontal size={16} />
              {showFilters ? 'Hide Filters' : 'Filter Results'}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters (Desktop) */}
          <AnimatePresence>
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full lg:w-72 space-y-8 bg-white p-8 border border-zinc-100 h-fit sticky top-28 z-40"
              >
                <div className="flex items-center justify-between lg:hidden mb-4">
                  <h3 className="font-serif text-xl">Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="p-2 text-zinc-400 hover:text-zinc-900">
                    <X size={20} />
                  </button>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">Property Type</h4>
                  <div className="space-y-2">
                    {propertyTypes.map(type => (
                      <button
                        key={type}
                        onClick={() => setPropertyType(type)}
                        className={cn(
                          "w-full text-left py-2 text-sm transition-colors",
                          propertyType === type ? "text-gold font-bold" : "text-zinc-600 hover:text-zinc-900"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">Min Bedrooms</h4>
                  <div className="flex flex-wrap gap-2">
                    {['All', 1, 2, 3, 4, 5].map(num => (
                      <button
                        key={num}
                        onClick={() => setBeds(num as any)}
                        className={cn(
                          "w-10 h-10 flex items-center justify-center text-xs border transition-all",
                          beds === num ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-200 text-zinc-600 hover:border-gold"
                        )}
                      >
                        {num === 'All' ? 'All' : `${num}+`}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">Price Range</h4>
                  <select 
                    className="w-full bg-zinc-50 border border-zinc-200 p-3 text-sm focus:outline-none focus:border-gold"
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === 'all') setPriceRange([0, 20000000]);
                      else if (val === '0-2m') setPriceRange([0, 2000000]);
                      else if (val === '2-5m') setPriceRange([2000000, 5000000]);
                      else if (val === '5m+') setPriceRange([5000000, 20000000]);
                    }}
                  >
                    <option value="all">All Prices</option>
                    <option value="0-2m">Under $2M</option>
                    <option value="2-5m">$2M - $5M</option>
                    <option value="5m+">$5M+</option>
                  </select>
                </div>

                <button
                  onClick={() => {
                    setPropertyType('All');
                    setPriceRange([0, 20000000]);
                    setBeds('All');
                    setSearchQuery('');
                  }}
                  className="w-full py-3 text-[10px] uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors border-t border-zinc-100 pt-6"
                >
                  Reset All Filters
                </button>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-zinc-500 text-sm">
                Showing <span className="text-zinc-900 font-bold">{filteredProperties.length}</span> luxury properties
              </p>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <span>Sort by:</span>
                <button className="text-zinc-900 font-medium flex items-center gap-1">
                  Newest <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProperties.map((property, idx) => (
                  <PropertyCard key={property.id} property={property} index={idx} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white border border-zinc-100">
                <Search size={48} className="mx-auto text-zinc-200 mb-4" />
                <h3 className="font-serif text-2xl text-zinc-900 mb-2">No Properties Found</h3>
                <p className="text-zinc-500 max-w-xs mx-auto">
                  We couldn't find any properties matching your current filters. Try adjusting your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
