import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Trophy, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Mail,
  Phone
} from 'lucide-react';
import { INITIAL_ATHLETE_PROFILE, TOURNAMENT_RECORDS, SPONSORSHIP_TIERS, RAMSPORTS_BRAND_INFO } from '../data/athleteData';
import { PerformanceStats } from '../types';

interface ProposalDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: PerformanceStats;
}

export const ProposalDeckModal: React.FC<ProposalDeckModalProps> = ({
  isOpen,
  onClose,
  stats,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl card-luxury border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col bg-[#06080D]">
        
        {/* Modal Controls Toolbar */}
        <div className="p-3.5 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/60 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]" />
            <span className="text-[10px] sm:text-xs font-black text-white uppercase tracking-wider font-mono-code truncate max-w-[190px] sm:max-w-none">
              PROPOSAL DECK · RAMSPORTS x {INITIAL_ATHLETE_PROFILE.name.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs font-bold font-mono-code transition-colors cursor-pointer border border-white/15"
            >
              <Printer className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 sm:p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Deck Body */}
        <div className="p-4 sm:p-10 overflow-y-auto space-y-6 sm:space-y-8 bg-[#080B10] text-slate-100 print:bg-white print:text-black">
          
          {/* Deck Header */}
          <div className="border-b border-white/10 print:border-black/20 pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-2xl bg-[#D4FF00] flex items-center justify-center glow-volt-sm">
                  <span className="font-black text-black text-sm sm:text-lg font-display">R</span>
                </div>
                <span className="font-black text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-[#D4FF00] uppercase font-mono-code">
                  RAMSPORTS GLOBAL PARTNERSHIP INITIATIVE
                </span>
              </div>
              <h2 className="text-xl sm:text-4xl font-black font-display text-white print:text-black uppercase tracking-tight">
                OFFICIAL ATHLETE SPONSORSHIP DECK
              </h2>
              <p className="text-[11px] sm:text-sm text-slate-400 print:text-gray-600 mt-1 font-normal">
                Brand Ambassador Candidate & Pro Tour Competitor 2026/2027
              </p>
            </div>

            <div className="text-right sm:border-l sm:border-white/10 print:border-black/20 sm:pl-6 text-xs text-slate-400 print:text-gray-600 font-mono-code">
              <span className="block font-black text-white print:text-black text-sm">{INITIAL_ATHLETE_PROFILE.name}</span>
              <span>DUPR: <strong className="text-[#D4FF00]">{INITIAL_ATHLETE_PROFILE.duprDoubles}</strong> (MD) / <strong>{INITIAL_ATHLETE_PROFILE.duprSingles}</strong> (MS)</span>
              <span className="block text-emerald-400 font-bold mt-0.5">Win Rate: {stats.winRate}% (Bekasi, ID)</span>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4FF00] print:text-black mb-2">
              1. EXECUTIVE SUMMARY
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              Pickleball is experiencing meteoric growth across Indonesia and Southeast Asia. Ramsports, as a world-class brand with the mission <em>"{RAMSPORTS_BRAND_INFO.slogan}"</em>, has a golden window of opportunity to cement brand leadership in the region. Partnering with elite competitor <strong className="text-white print:text-black">Muhammad Sulthan Rafy</strong> (Bekasi-based, 7 podium finishes) guarantees podium visibility, engaged digital audiences, and real-world performance validation for Ramsports Typhoon paddles and technical apparel.
            </p>
          </div>

          {/* Section 2: Key Podium Finishes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4FF00] print:text-black mb-3">
              2. VERIFIED CHAMPIONSHIP PODIUM TITLES (7 AWARDS)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TOURNAMENT_RECORDS.map((tour) => (
                <div key={tour.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white print:text-black">{tour.achievement}</span>
                    <span className="text-[10px] text-slate-400">{tour.year}</span>
                  </div>
                  <div className="text-slate-300 print:text-gray-700 font-medium">{tour.title}</div>
                  <div className="text-[10px] font-mono text-[#D4FF00] print:text-black mt-1">
                    Verified Asset: {tour.fileName}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Value Proposition */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#D4FF00] print:text-black mb-3">
              3. STRATEGIC VALUE FOR RAMSPORTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300">
                <span className="font-bold text-[#D4FF00] print:text-black block text-sm mb-1">Brand Authority</span>
                <p className="text-slate-300 print:text-gray-700">
                  Validates that Ramsports Typhoon paddles are wielded by top-tier contenders to secure actual tournament championships.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300">
                <span className="font-bold text-white print:text-black block text-sm mb-1">Digital Reach</span>
                <p className="text-slate-300 print:text-gray-700">
                  Projected 150,000+ combined impressions across tournament courts and viral content reels (TikTok @pickleballindo & Instagram @vyravy_).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-gray-300">
                <span className="font-bold text-emerald-400 print:text-black block text-sm mb-1">Community Growth</span>
                <p className="text-slate-300 print:text-gray-700">
                  Direct pipeline to active pickleball clubs across Bekasi, Jakarta, and West Java through clinics and demonstration events.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Contact Action */}
          <div className="pt-6 border-t border-white/10 print:border-black/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-400 print:text-gray-600">
              <span>Email: <strong className="text-white print:text-black">{INITIAL_ATHLETE_PROFILE.email}</strong></span>
              <span className="mx-2">·</span>
              <span>WhatsApp: <strong className="text-white print:text-black">{INITIAL_ATHLETE_PROFILE.phone}</strong></span>
              <span className="mx-2">·</span>
              <span>Base: <strong className="text-white print:text-black">{INITIAL_ATHLETE_PROFILE.location}</strong></span>
            </div>

            <div className="print:hidden">
              <a
                href={`https://wa.me/${INITIAL_ATHLETE_PROFILE.whatsappNumber}?text=Hello%20Muhammad%20Sulthan%20Rafy,%20we%20reviewed%20your%20Ramsports%20Proposal%20Deck%20and%20would%20like%20to%20schedule%20a%20call.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#D4FF00] hover:bg-[#c2e800] text-black font-extrabold uppercase tracking-wider"
              >
                Connect on WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
