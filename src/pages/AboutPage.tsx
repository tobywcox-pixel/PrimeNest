import React from 'react';
import { Award, Users, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32 bg-zinc-900 text-white overflow-hidden px-6">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Estate"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Our Legacy</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Defining the Art of <br /><span className="italic">Luxury Living</span></h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Since 1992, PrimeNest Realty has been the trusted partner for the world's most 
            discerning property buyers, offering a bespoke approach to real estate.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                  alt="Luxury Residence"
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-10 -right-10 bg-gold p-12 hidden md:block">
                  <span className="text-zinc-900 text-5xl font-serif block mb-2">30+</span>
                  <span className="text-zinc-900 text-[10px] uppercase tracking-widest font-bold">Years of Excellence</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-zinc-900 mb-8 leading-tight">
                A Vision of <span className="italic">Uncompromising</span> Quality
              </h2>
              <div className="space-y-6 text-zinc-600 leading-relaxed">
                <p>
                  PrimeNest Realty was founded on a simple yet profound principle: that luxury is not just a price point, but a standard of service and a commitment to excellence.
                </p>
                <p>
                  What began as a boutique agency in London has evolved into a global powerhouse, representing some of the most iconic residential properties across three continents. Our journey has been defined by the relationships we build and the trust we earn.
                </p>
                <p>
                  We believe that every home tells a story, and our mission is to help you find the one that perfectly reflects yours. Whether it's a coastal villa, a city penthouse, or a historic manor, we bring the same level of passion and precision to every search.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="font-serif text-2xl text-zinc-900 mb-2">$12B+</h4>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest">Total Sales Volume</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-zinc-900 mb-2">500+</h4>
                  <p className="text-zinc-400 text-xs uppercase tracking-widest">Exclusive Listings</p>
                </div>
              </div>

              {/* Added modern architecture image */}
              <div className="mt-16 relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Glass Architecture"
                  className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-gold text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Values</span>
            <h2 className="text-4xl font-serif text-zinc-900">The Pillars of <span className="italic">PrimeNest</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Integrity", desc: "Honesty and transparency are at the core of every interaction." },
              { icon: Award, title: "Excellence", desc: "We strive for perfection in every detail of our service." },
              { icon: Users, title: "Discretion", desc: "Protecting our clients' privacy is our highest priority." },
              { icon: Globe, title: "Global Reach", desc: "A worldwide network of luxury property specialists." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 border border-zinc-100 text-center hover:shadow-xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gold/10 text-gold flex items-center justify-center mx-auto mb-6 rounded-full">
                  <value.icon size={32} />
                </div>
                <h3 className="font-serif text-xl text-zinc-900 mb-4">{value.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
