import React from 'react';
import { ArrowUp, Instagram, ExternalLink, Heart } from 'lucide-react';
import { INITIAL_ATHLETE_PROFILE, RAMSPORTS_BRAND_INFO } from '../data/athleteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060A] border-t border-white/10 text-slate-400 text-xs py-14 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-[#D4FF00]/5 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#D4FF00] flex items-center justify-center font-black text-black text-lg font-display glow-volt-sm">
                R
              </div>
              <span className="font-black font-display text-white text-sm sm:text-lg tracking-wider uppercase">
                RAMSPORTS x {INITIAL_ATHLETE_PROFILE.name.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              Official Athlete Sponsorship & Brand Ambassadorship Portfolio. Designed specifically to present the championship synergy between competitive Indonesian athlete {INITIAL_ATHLETE_PROFILE.name} (Bekasi, ID) and Ramsports Global.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <span className="text-white font-bold uppercase tracking-wider block text-[11px]">
              Page Navigation
            </span>
            <ul className="space-y-1.5">
              <li><a href="#hero" className="hover:text-[#D4FF00] transition-colors">Overview & Proposal</a></li>
              <li><a href="#stats" className="hover:text-[#D4FF00] transition-colors">Real-Time Analytics</a></li>
              <li><a href="#tournaments" className="hover:text-[#D4FF00] transition-colors">Tournament Records (7 Titles)</a></li>
              <li><a href="#synergy" className="hover:text-[#D4FF00] transition-colors">Ramsports Synergy & ROI</a></li>
              <li><a href="#video" className="hover:text-[#D4FF00] transition-colors">Match Video Reel</a></li>
              <li><a href="#media" className="hover:text-[#D4FF00] transition-colors">Media Vault (15 Assets)</a></li>
            </ul>
          </div>

          {/* Target Brand & Social */}
          <div className="space-y-2">
            <span className="text-white font-bold uppercase tracking-wider block text-[11px]">
              External Channels
            </span>
            <ul className="space-y-1.5">
              <li>
                <a 
                  href="https://www.instagram.com/ramsportspickleball/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FF00] flex items-center gap-1 transition-colors"
                >
                  <span>@ramsportspickleball (Instagram)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://ramsports.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FF00] flex items-center gap-1 transition-colors"
                >
                  <span>ramsports.com (Official Gear)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/vyravy_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D4FF00] flex items-center gap-1 transition-colors"
                >
                  <span>@vyravy_ (Athlete Instagram)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${INITIAL_ATHLETE_PROFILE.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D4FF00] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>WhatsApp: {INITIAL_ATHLETE_PROFILE.phone}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {INITIAL_ATHLETE_PROFILE.name} · Bekasi Based · DUPR Verified Pickleball Athlete · Ramsports Global Partnership Deck.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
