
import React from 'react';
import { Phone, Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import { BUSINESS_DATA } from '@/constants';

const TopBar = () => {
    return (
        <div className="hidden xl:block bg-gradient-to-r from-slate-50 via-white to-slate-50 text-slate-600 py-2 border-b border-slate-200/80 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center space-x-6">
                    <a href={`tel:${BUSINESS_DATA.phone}`} className="flex items-center hover:text-orange-500 transition-colors group">
                        <Phone className="w-3 h-3 mr-2 text-orange-500 group-hover:scale-110 transition-transform" />
                        {BUSINESS_DATA.phone}
                    </a>
                    <a href={`mailto:${BUSINESS_DATA.email}`} className="flex items-center hover:text-orange-500 transition-colors group">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2" />
                        {BUSINESS_DATA.email}
                    </a>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 pr-4 border-r border-slate-300">
                        <a href={BUSINESS_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
                        <a href={BUSINESS_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
                        <a href={BUSINESS_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
                        <a href={BUSINESS_DATA.socials.x} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
                        <a href={BUSINESS_DATA.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
                    </div>
                    <span className="text-slate-400 uppercase tracking-widest">Master Craftsmanship Since 2014</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
