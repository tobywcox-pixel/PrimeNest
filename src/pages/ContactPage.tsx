import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import InquiryForm from '@/src/components/InquiryForm';

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-zinc-50 px-6 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif text-zinc-900 mb-6">Contact Our <span className="italic">Advisors</span></h1>
          <p className="text-zinc-500 max-w-xl mx-auto font-light">
            Whether you are looking to acquire a new property or list an exclusive estate, 
            our team is ready to provide expert guidance.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-zinc-900 mb-8">Global <span className="italic text-gold">Headquarters</span></h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-zinc-900 text-gold flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 mb-2">Address</h4>
                      <p className="text-zinc-900 font-serif text-lg">
                        124 Park Lane, Mayfair<br />
                        London, W1K 7AF, United Kingdom
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-zinc-900 text-gold flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 mb-2">Phone</h4>
                      <p className="text-zinc-900 font-serif text-lg">+44 20 7946 0123</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-zinc-900 text-gold flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 mb-2">Email</h4>
                      <p className="text-zinc-900 font-serif text-lg">concierge@primenest.com</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-zinc-900 text-gold flex items-center justify-center shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 mb-2">Hours</h4>
                      <p className="text-zinc-900 font-serif text-lg">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-zinc-500 text-sm italic">Weekend by appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-zinc-100">
                <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 mb-6">Follow Us</h4>
                <div className="flex gap-4">
                  {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-12 h-12 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-gold hover:border-gold transition-all">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <InquiryForm className="shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-zinc-100 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
          alt="Map"
          className="w-full h-full object-cover grayscale opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-zinc-900 text-white p-10 shadow-2xl max-w-sm text-center">
            <MapPin className="text-gold mx-auto mb-4" size={40} />
            <h3 className="font-serif text-2xl mb-2">Visit Our Office</h3>
            <p className="text-white/60 text-sm mb-6">Experience the PrimeNest standard in person at our Mayfair showroom.</p>
            <button className="text-gold text-[10px] uppercase tracking-widest font-bold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
