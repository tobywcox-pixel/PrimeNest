import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InquiryFormProps {
  propertyTitle?: string;
  className?: string;
}

export default function InquiryForm({ propertyTitle, className }: InquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 text-white p-8 text-center flex flex-col items-center justify-center min-h-[300px]"
          >
            <CheckCircle size={48} className="text-gold mb-4" />
            <h3 className="font-serif text-2xl mb-2">Inquiry Received</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Thank you for your interest. One of our luxury property specialists will contact you within 24 hours.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-gold text-xs uppercase tracking-widest font-bold hover:underline"
            >
              Send another inquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="bg-white border border-zinc-100 p-8 shadow-sm"
          >
            <h3 className="font-serif text-2xl text-zinc-900 mb-1">
              {propertyTitle ? 'Inquire About This Property' : 'Request Information'}
            </h3>
            <p className="text-zinc-500 text-xs uppercase tracking-widest mb-8">
              Experience the PrimeNest difference
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-1.5">Full Name</label>
                <input
                  required
                  type="text"
                  className="w-full bg-zinc-50 border-b border-zinc-200 px-0 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-1.5">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-zinc-50 border-b border-zinc-200 px-0 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-1.5">Phone Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-zinc-50 border-b border-zinc-200 px-0 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-bold text-zinc-400 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-zinc-50 border-b border-zinc-200 px-0 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder={propertyTitle ? `I am interested in ${propertyTitle}...` : "How can we help you?"}
                />
              </div>
            </div>

            <button
              disabled={status === 'submitting'}
              type="submit"
              className="w-full mt-8 bg-zinc-900 text-white py-4 uppercase tracking-[0.2em] text-xs font-bold flex items-center justify-center gap-2 hover:bg-gold transition-all duration-300 disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending...' : (
                <>
                  Request Details <Send size={14} />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
