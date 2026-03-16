'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Send, CheckCircle } from 'lucide-react';
import { BUSINESS_DATA, SERVICES } from '@/constants';
import { useSearchParams } from 'next/navigation';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';
const PHONE_REGEX = /^[+]?[\d\s\-()]{8,20}$/;
type FormFields = 'name' | 'phone' | 'service' | 'message';
type FormDataState = Record<FormFields, string>;
type FormErrors = Partial<Record<FormFields, string>>;

const ContactFormByParams = () => {
  const searchParams = useSearchParams();
  const selectedServiceFromState = searchParams.get('service') || '';

  const [formData, setFormData] = React.useState<FormDataState>({
    name: '',
    phone: '',
    service: selectedServiceFromState,
    message: ''
  });
  const [fieldErrors, setFieldErrors] = React.useState<FormErrors>({});

  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleFieldChange = (field: FormFields, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateForm = (data: FormDataState): FormErrors => {
    const errors: FormErrors = {};
    const name = data.name.trim();
    const phone = data.phone.trim();
    const service = data.service.trim();
    const message = data.message.trim();

    if (name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    } else if (name.length > 80) {
      errors.name = 'Name must be at most 80 characters';
    }

    if (!PHONE_REGEX.test(phone)) {
      errors.phone = 'Enter a valid phone number';
    }

    if (service.length < 2) {
      errors.service = 'Please select a service';
    } else if (service.length > 100) {
      errors.service = 'Service name is too long';
    }

    if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    } else if (message.length > 2000) {
      errors.message = 'Message is too long';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setStatus('error');
      setErrorMessage('Please fix the highlighted fields');
      return;
    }

    setStatus('sending');
    setErrorMessage('');
    setFieldErrors({});

    try {
      const payload = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        service: formData.service.trim(),
        message: formData.message.trim(),
      };

      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data?.errors && typeof data.errors === 'object') {
          const backendFieldErrors: FormErrors = {
            name: data.errors.name?.[0],
            phone: data.errors.phone?.[0],
            service: data.errors.service?.[0],
            message: data.errors.message?.[0],
          };
          setFieldErrors(backendFieldErrors);
        }
        throw new Error(data.message || data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-slate-900 mb-6"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Ready to start your renovation journey? Reach out to Director Sanjeev Kumar and the team for a personalized quote.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-orange-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <div className="w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              </div>

              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="bg-white/20 p-4 rounded-2xl shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-orange-200 text-sm font-bold uppercase tracking-widest">Call Us Directly</p>
                    <a href={`tel:${BUSINESS_DATA.phone}`} className="text-xl font-bold hover:text-orange-200 transition-colors">
                      {BUSINESS_DATA.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="bg-white/20 p-4 rounded-2xl shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-orange-200 text-sm font-bold uppercase tracking-widest">Send an Email</p>
                    <a href={`mailto:${BUSINESS_DATA.email}`} className="text-xl font-bold hover:text-orange-200 transition-colors">
                      {BUSINESS_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="bg-white/20 p-4 rounded-2xl shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-orange-200 text-sm font-bold uppercase tracking-widest">Office Location</p>
                    <p className="text-xl font-bold leading-tight">
                      {BUSINESS_DATA.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-white/20">
                <p className="text-orange-200 mb-6 font-semibold">Social Media Presence</p>
                <div className="flex space-x-4">
                  <a href={BUSINESS_DATA.socials.instagram} target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-all"><Instagram /></a>
                  <a href={BUSINESS_DATA.socials.facebook} target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-all"><Facebook /></a>
                  <a href={BUSINESS_DATA.socials.x} target="_blank" className="p-3 bg-white/10 rounded-xl hover:bg-white/30 transition-all"><Twitter /></a>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100 flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="text-orange-800 font-medium">
                We typically respond to all inquiries within <span className="font-bold underline">2-4 business hours</span>.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
              {status === 'success' ? (
                <div className="text-center py-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                  >
                    <CheckCircle className="w-12 h-12" />
                  </motion.div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Message Received!</h2>
                  <p className="text-slate-600 text-lg max-w-md mx-auto">Thank you for reaching out. Sanjeev Kumar or one of our representatives will contact you shortly.</p>
                </div>
              ) : status === 'error' ? (
                <div className="text-center py-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
                  >
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Something Went Wrong</h2>
                  <p className="text-slate-600 text-lg max-w-md mx-auto mb-6">{errorMessage || 'Please try again or contact us directly.'}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest border border-orange-200">New Inquiry</span>
                    <span className="text-slate-400 text-xs font-medium">Takes less than 2 minutes</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 uppercase tracking-wide ml-1">Your Full Name</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        minLength={2}
                        maxLength={80}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all font-medium"
                        placeholder="John Doe"
                      />
                      {fieldErrors.name ? <p className="text-red-600 text-xs ml-1">{fieldErrors.name}</p> : null}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 uppercase tracking-wide ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        minLength={8}
                        maxLength={20}
                        pattern="^[+]?[\\d\\s\\-()]{8,20}$"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all font-medium"
                        placeholder="07XXX XXXXXX"
                      />
                      {fieldErrors.phone ? <p className="text-red-600 text-xs ml-1">{fieldErrors.phone}</p> : null}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Service Required</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => handleFieldChange('service', e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                      <option value="Custom Quote">Other / Custom Project</option>
                    </select>
                    {fieldErrors.service ? <p className="text-red-600 text-xs ml-1">{fieldErrors.service}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      minLength={10}
                      maxLength={2000}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all resize-none"
                      placeholder="Tell us about your project requirements, budget, and timeline..."
                    />
                    {fieldErrors.message ? <p className="text-red-600 text-xs ml-1">{fieldErrors.message}</p> : null}
                  </div>

                  <button
                    disabled={status === 'sending'}
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-slate-300 text-white font-black text-xl py-6 rounded-3xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center space-x-3 transform active:scale-95"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <span>Get My Free Quote</span>
                        <Send className="w-6 h-6" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactFormByParams />
    </Suspense>
  );
};

export default Contact;
