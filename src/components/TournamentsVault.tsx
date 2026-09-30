import React, { useState } from 'react';
import { 
  Trophy, 
  Medal, 
  Award, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Eye, 
  CheckCircle2, 
  Filter,
  Layers,
  Sparkles,
  X
} from 'lucide-react';
import { TOURNAMENT_RECORDS, INITIAL_ATHLETE_PROFILE } from '../data/athleteData';
import { TournamentRecord } from '../types';
import { resolveMediaUrl } from '../utils/mediaStorage';

interface TournamentsVaultProps {
  onOpenMediaModal: () => void;
}

export const TournamentsVault: React.FC<TournamentsVaultProps> = ({ onOpenMediaModal }) => {
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [activeModalRecord, setActiveModalRecord] = useState<TournamentRecord | null>(null);

  const filteredTournaments = TOURNAMENT_RECORDS.filter((tour) => {
    if (selectedTier === 'all') return true;
    if (selectedTier === 'gold') return tour.tier === 'gold';
    if (selectedTier === 'silver') return tour.tier === 'silver';
    if (selectedTier === 'bronze') return tour.tier === 'bronze';
    if (selectedTier === 'doubles') return tour.category.includes('Doubles');
    if (selectedTier === 'singles') return tour.category.includes('Singles');
    return true;
  });

  return (
    <section id="tournaments" className="py-20 bg-[#0B0E14] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider sm:tracking-widest text-amber-400">
                CHAMPIONSHIP CABINET & OFFICIAL CERTIFICATES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
              TOURNAMENT PODIUM RECORDS
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
              Authentic documentary proof of championship gold, silver, and bronze podium finishes across major national and regional pickleball brackets.
            </p>
          </div>

          {/* Medals Summary Pill & Media Link */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <div className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl card-luxury border border-white/15 text-[11px] sm:text-xs font-mono-code shadow-md">
              <span className="text-amber-400 font-black text-xs sm:text-sm">2</span> Gold
              <span className="text-slate-500">·</span>
              <span className="text-slate-200 font-black text-xs sm:text-sm">3</span> Silver
              <span className="text-slate-500">·</span>
              <span className="text-amber-500 font-black text-xs sm:text-sm">2</span> Bronze
            </div>

            <button
              onClick={onOpenMediaModal}
              className="text-[11px] sm:text-xs text-[#D4FF00] hover:underline flex items-center gap-1.5 font-bold font-mono-code px-3 py-1.5 sm:py-2 rounded-xl bg-[#D4FF00]/10 border border-[#D4FF00]/30 hover:bg-[#D4FF00]/20 transition-colors cursor-pointer"
            >
              <span>Vault Proofs</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
          {[
            { id: 'all', label: 'All Titles (7)' },
            { id: 'gold', label: '🥇 1st Place / Gold' },
            { id: 'silver', label: '🥈 2nd Place / Silver' },
            { id: 'bronze', label: '🥉 3rd Place / Bronze' },
            { id: 'doubles', label: "Men's Doubles" },
            { id: 'singles', label: "Men's Singles" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTier(tab.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                selectedTier === tab.id
                  ? 'bg-[#D4FF00] text-black shadow-md glow-volt-sm font-extrabold'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tournament Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredTournaments.map((tour) => {
            const imageUrl = resolveMediaUrl(tour.fileName);
            const isGold = tour.tier === 'gold';
            const isSilver = tour.tier === 'silver';
            const isBronze = tour.tier === 'bronze';

            return (
              <div
                key={tour.id}
                onClick={() => setActiveModalRecord(tour)}
                className={`group cursor-pointer rounded-3xl overflow-hidden card-luxury transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  isGold
                    ? 'border-amber-400/40 hover:border-amber-400 hover:shadow-amber-400/20'
                    : isSilver
                    ? 'border-slate-300/40 hover:border-slate-200 hover:shadow-slate-300/20'
                    : 'border-amber-700/40 hover:border-amber-600 hover:shadow-amber-700/20'
                }`}
              >
                {/* Image Preview Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={imageUrl}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        '/assets/sertifjuara1kadispora.jpeg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/35 to-transparent" />

                  {/* Achievement Medal Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/80 border border-white/15 shadow-md">
                    <Medal
                      className={`w-4 h-4 ${
                        isGold ? 'text-amber-400' : isSilver ? 'text-slate-200' : 'text-amber-500'
                      }`}
                    />
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider font-display ${
                        isGold ? 'text-amber-400' : isSilver ? 'text-slate-100' : 'text-amber-400'
                      }`}
                    >
                      {tour.achievement}
                    </span>
                  </div>

                  {/* File Name Tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono-code text-slate-300 truncate max-w-[170px]">
                    {tour.fileName}
                  </div>

                  {/* Year & Category Pill */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono-code">
                    <span className="font-bold text-white text-xs">{tour.category}</span>
                    <span className="text-[11px] text-slate-300 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-md border border-white/10">
                      <Calendar className="w-3 h-3 text-[#D4FF00]" />
                      {tour.year}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-white group-hover:text-[#D4FF00] transition-colors leading-snug">
                      {tour.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {tour.notes}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5 font-mono-code text-[10px] sm:text-[11px]">
                      <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400" />
                      {tour.location}
                    </span>
                    <span className="text-[#D4FF00] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[11px] sm:text-xs">
                      <span>Inspect Proof</span>
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Medals Banner with Luxury Foil */}
        <div className="mt-10 sm:mt-14 rounded-3xl card-luxury border border-amber-500/30 p-4 sm:p-8 flex flex-col lg:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(251,191,36,0.15)]">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400" />
            </div>
            <div>
              <h4 className="text-base sm:text-xl font-black text-white font-display">
                Proven Championship Consistency: 7 Verified Podium Titles
              </h4>
              <p className="text-[11px] sm:text-sm text-slate-300 mt-1 max-w-xl leading-relaxed">
                Physical medal rack (<code className="text-[#D4FF00] font-mono-code text-[11px] sm:text-xs">fotobeberapamedali.jpg</code>) and podium celebration footage (<code className="text-[#D4FF00] font-mono-code text-[11px] sm:text-xs">fotomenggunakanmedali.jpg</code>) ready to integrate directly into Ramsports marketing campaigns.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenMediaModal}
            className="w-full sm:w-auto shrink-0 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-[11px] sm:text-xs font-bold font-mono-code flex items-center justify-center gap-2 transition-all hover:border-[#D4FF00]/50 hover:shadow-[0_0_20px_rgba(212,255,0,0.2)] cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#D4FF00]" />
            <span>Open Documents Vault</span>
          </button>
        </div>

      </div>

      {/* Single Tournament Detail Modal */}
      {activeModalRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#0E121A] border border-white/20 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2">
                <Medal className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-white font-heading uppercase">
                  Official Award Verification
                </span>
              </div>
              <button
                onClick={() => setActiveModalRecord(null)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Box */}
            <div className="relative aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={resolveMediaUrl(activeModalRecord.fileName)}
                alt={activeModalRecord.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    '/assets/sertifjuara1kadispora.jpeg';
                }}
              />
              <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded bg-black/80 text-[11px] font-mono text-[#D4FF00] border border-[#D4FF00]/30">
                Asset: {activeModalRecord.fileName}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                  <span>{activeModalRecord.achievement}</span>
                  <span>·</span>
                  <span>{activeModalRecord.category}</span>
                </div>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  {activeModalRecord.title}
                </h3>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {activeModalRecord.notes}
              </p>

              {activeModalRecord.statsHighlight && (
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                  <span className="font-semibold text-[#D4FF00] block mb-0.5">Key Match Metric:</span>
                  <span className="text-slate-300">{activeModalRecord.statsHighlight}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/10 text-slate-400">
                <div>
                  <span className="block text-slate-500">Tournament Location:</span>
                  <span className="font-semibold text-white">{activeModalRecord.location}</span>
                </div>
                <div>
                  <span className="block text-slate-500">Championship Year:</span>
                  <span className="font-semibold text-white">{activeModalRecord.year}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalRecord(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Close
                </button>
                <a
                  href={`https://wa.me/${INITIAL_ATHLETE_PROFILE.whatsappNumber}?text=Hello%20Muhammad%20Sulthan%20Rafy,%20we%20reviewed%20your%20award%20at%20${encodeURIComponent(activeModalRecord.title)}%20and%20would%20love%20to%20discuss%20sponsorship.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-[#D4FF00] text-black hover:bg-[#c1e700]"
                >
                  Inquire with Athlete
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
