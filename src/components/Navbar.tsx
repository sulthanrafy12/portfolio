import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Activity, 
  Sparkles, 
  Video, 
  Images, 
  Mail, 
  Sun, 
  Moon, 
  Radio, 
  UploadCloud, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { INITIAL_ATHLETE_PROFILE } from '../data/athleteData';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenMediaModal: () => void;
  onOpenApiModal: () => void;
  isApiLive: boolean;
  onToggleApiLive: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenMediaModal,
  onOpenApiModal,
  isApiLive,
  onToggleApiLive,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Analytics', href: '#stats' },
    { name: 'Tournaments', href: '#tournaments' },
    { name: 'Brand Synergy', href: '#synergy' },
    { name: 'Highlights', href: '#video' },
    { name: 'Media Vault', href: '#media' },
    { name: 'Partnership', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080D]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo Synergy */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3.5 group">
            {/* Ramsports Circle Logo */}
            <div className="relative">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-[#D4FF00] flex items-center justify-center shadow-lg shadow-[#D4FF00]/30 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 glow-volt-sm">
                <span className="font-black text-black text-xl sm:text-2xl font-display tracking-tighter">R</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-black flex items-center justify-center border border-white/20">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-lg tracking-wider uppercase font-display text-white group-hover:text-[#D4FF00] transition-colors">
                  RAMSPORTS
                </span>
                <span className="text-[8px] sm:text-[9px] font-black uppercase px-1.5 sm:px-2 py-0.5 rounded-full bg-[#D4FF00]/15 text-[#D4FF00] border border-[#D4FF00]/30 font-mono-code">
                  PRO ATHLETE
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-tight">
                {INITIAL_ATHLETE_PROFILE.name} · Bekasi, ID
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-[#D4FF00] transition-colors relative py-1 hover:border-b-2 hover:border-[#D4FF00] font-mono-code"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live API indicator badge */}
            <button
              onClick={onOpenApiModal}
              title="Real-time player telemetry API status (Click for simulator)"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono-code card-luxury hover:border-[#D4FF00]/50 text-slate-300 transition-all cursor-pointer shadow-sm"
            >
              <span className={`w-2 h-2 rounded-full ${isApiLive ? 'bg-[#D4FF00] animate-pulse shadow-[0_0_8px_#D4FF00]' : 'bg-slate-500'}`} />
              <span>{isApiLive ? 'TELEMETRY LIVE' : 'SYNC PAUSED'}</span>
              <span className="text-[9px] text-[#D4FF00] bg-[#D4FF00]/15 px-1.5 py-0.5 rounded border border-[#D4FF00]/30">REST</span>
            </button>

            {/* Media Manager upload shortcut */}
            <button
              onClick={onOpenMediaModal}
              title="Manage & view all 15 authentic assets"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold font-mono-code card-luxury hover:border-[#D4FF00]/40 text-slate-200 transition-all cursor-pointer"
            >
              <UploadCloud className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>Files Vault (15)</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme appearance"
              className="p-2 rounded-xl card-luxury hover:border-white/30 text-slate-300 hover:text-white transition-all cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>

            {/* Direct Connect WhatsApp CTA */}
            <a
              href={`https://wa.me/${INITIAL_ATHLETE_PROFILE.whatsappNumber}?text=Hello%20Muhammad%20Sulthan%20Rafy,%20we%20are%20from%20Ramsports%20and%20interested%20in%20discussing%20a%20pickleball%20sponsorship%20partnership.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider bg-[#D4FF00] text-black hover:bg-lime-300 transition-all hover:scale-105 shadow-lg glow-volt-sm font-mono-code cursor-pointer"
            >
              <span>Connect Athlete</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-white/5 text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden py-4 px-3 bg-[#0B0E14] border-b border-white/10 rounded-b-2xl shadow-2xl flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-[#D4FF00]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApiModal();
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 text-xs text-slate-300"
              >
                <span>Live API Simulator</span>
                <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMediaModal();
                }}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 text-xs text-slate-300"
              >
                <span>Files & Vault Manager (15 Files)</span>
                <UploadCloud className="w-4 h-4 text-[#D4FF00]" />
              </button>
              <a
                href={`https://wa.me/${INITIAL_ATHLETE_PROFILE.whatsappNumber}?text=Hello%20Muhammad%20Sulthan%20Rafy,%20we%20are%20from%20Ramsports%20and%20interested%20in%20discussing%20a%20pickleball%20sponsorship%20partnership.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#D4FF00] text-black"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
