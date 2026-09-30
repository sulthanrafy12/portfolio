import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Flame, 
  ShieldCheck, 
  Zap, 
  Award,
  DollarSign,
  Calculator,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SPONSORSHIP_TIERS, RAMSPORTS_BRAND_INFO, INITIAL_ATHLETE_PROFILE } from '../data/athleteData';
import { resolveMediaUrl } from '../utils/mediaStorage';

interface RamsportSynergyProps {
  onOpenDeckModal: () => void;
  onOpenMediaModal: () => void;
}

export const RamsportSynergy: React.FC<RamsportSynergyProps> = ({
  onOpenDeckModal,
  onOpenMediaModal,
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('tier-pro');

  // Interactive ROI Calculator State
  const [tournamentsCount, setTournamentsCount] = useState<number>(8);
  const [socialFrequency, setSocialFrequency] = useState<number>(4); // posts per month

  // Projected metrics calculation
  const liveAudiencePerTour = 1200;
  const directLiveImpressions = tournamentsCount * liveAudiencePerTour;
  const socialImpressionsYear = socialFrequency * 12 * 8500;
  const totalProjectedImpressions = directLiveImpressions + socialImpressionsYear;
  const estimatedMediaValueUsd = Math.round(totalProjectedImpressions * 0.045);

  const paddleOldUrl = resolveMediaUrl('fotopaddlekamito.png');

  return (
    <section id="synergy" className="py-20 bg-[#0E121A] text-slate-100 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Synergy Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] text-[9px] sm:text-xs font-mono-code font-bold uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-3 glow-volt-sm">
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span>OFFICIAL BRAND PARTNERSHIP PROPOSAL · TARGET BRAND</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
            CHAMPIONSHIP SYNERGY WITH <br />
            <span className="shimmer-text">
              RAMSPORTS GLOBAL
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            Bringing the ethos of <strong className="text-white font-semibold">"{RAMSPORTS_BRAND_INFO.slogan}"</strong> to life through a podium-proven Indonesian athlete. Converting tournament visibility into direct commercial demand for Ramsports paddles and technical gear.
          </p>
        </div>

        {/* Paddle Equipment Spotlight (fotopaddlekamito.png / Ramsports Typhoon 16mm) */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-10 rounded-3xl card-luxury border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4FF00]/5 rounded-bl-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left explanation */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2 font-mono-code">
                <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#D4FF00]/15 text-[10px] sm:text-xs font-bold text-[#D4FF00] border border-[#D4FF00]/30 glow-volt-sm">
                  EQUIPMENT SPOTLIGHT
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400">
                  File: <code className="text-slate-300 font-mono-code">fotopaddlekamito.png</code>
                </span>
              </div>

              <h3 className="text-lg sm:text-3xl lg:text-4xl font-black text-white font-display">
                Ramsports Typhoon 16mm USA Pickleball Approved
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Featuring the official <strong className="text-[#D4FF00] font-semibold">Ramsports Typhoon 16mm</strong> paddle—engineered for high-velocity spin, thermoformed edge-seal durability, and hyper-reactive touch on third-shot drops. {INITIAL_ATHLETE_PROFILE.name} leverages this precision weapon to dominate high-intensity kitchen firefights.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5 pt-2 font-mono-code">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-black/40 border border-white/10 hover:border-[#D4FF00]/30 transition-colors">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 block uppercase">Control Rating</span>
                  <span className="text-lg sm:text-xl font-black text-[#D4FF00] font-display">+25% Precision</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 block uppercase">Spin Capacity</span>
                  <span className="text-lg sm:text-xl font-black text-white font-display">2,150+ RPM</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-2xl bg-black/40 border border-white/10 hover:border-emerald-400/30 transition-colors">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 block uppercase">Tour Branding</span>
                  <span className="text-lg sm:text-xl font-black text-emerald-400 font-display">100% Branded</span>
                </div>
              </div>
            </div>

            {/* Right Paddle Visual */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden card-luxury border border-white/15 p-3.5 sm:p-4 shadow-2xl group hover:border-[#D4FF00]/40 transition-colors">
                <div className="flex items-center justify-between text-[11px] sm:text-xs pb-2.5 sm:pb-3 border-b border-white/10 font-mono-code">
                  <span className="text-slate-300 font-bold">Ramsports Typhoon 16mm</span>
                  <span className="text-[#D4FF00] font-bold">USA PB Approved</span>
                </div>

                <div className="relative aspect-square w-full mt-3 rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center group border border-white/5">
                  <img
                    src={paddleOldUrl}
                    alt="Ramsports Typhoon 16mm Paddle Setup"
                    className="w-4/5 h-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        '/assets/fotopaddlekamito.png';
                    }}
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] text-slate-300 flex items-center justify-between font-mono-code">
                    <span className="truncate">fotopaddlekamito.png</span>
                    <span className="text-[#D4FF00] font-bold text-[9px] sm:text-[10px]">VERIFIED GEAR</span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <button
                    onClick={onOpenMediaModal}
                    className="text-[11px] sm:text-xs font-mono-code text-slate-400 hover:text-[#D4FF00] transition-colors cursor-pointer"
                  >
                    View Authentic Gear Asset &rarr;
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Interactive Sponsorship ROI Calculator */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-10 rounded-3xl card-luxury border border-[#D4FF00]/30 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6 pb-5 sm:pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono-code font-bold text-[#D4FF00] uppercase mb-1 sm:mb-1.5 tracking-wider">
                <Calculator className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span>Return On Investment (ROI) Simulation</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-display text-white uppercase">
                BRAND EXPOSURE & VALUE CALCULATOR
              </h3>
              <p className="text-[11px] sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Calculate projected direct spectators at tournament venues and online digital impressions across social reels.
              </p>
            </div>

            <div className="text-left sm:text-right card-luxury p-3 sm:p-3.5 rounded-2xl border border-white/15">
              <span className="text-[10px] sm:text-xs text-slate-400 block font-mono-code uppercase">Estimated Media Value</span>
              <span className="text-xl sm:text-3xl lg:text-4xl font-black text-[#D4FF00] font-display">
                ${estimatedMediaValueUsd.toLocaleString('en-US')} USD
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mt-5 sm:mt-6">
            
            {/* Slider 1: Tournaments */}
            <div>
              <div className="flex justify-between text-[11px] sm:text-xs text-slate-300 mb-1.5 sm:mb-2">
                <span className="font-semibold">Official Tournaments Competed:</span>
                <span className="text-[#D4FF00] font-extrabold text-xs sm:text-sm font-mono">{tournamentsCount} Events / Year</span>
              </div>
              <input
                type="range"
                min="4"
                max="16"
                step="1"
                value={tournamentsCount}
                onChange={(e) => setTournamentsCount(Number(e.target.value))}
                className="w-full accent-[#D4FF00] cursor-pointer h-2 bg-white/10 rounded-lg"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 mt-1">
                <span>4 Events (Greater Jakarta)</span>
                <span>16 Events (National Pro Tour)</span>
              </div>
            </div>

            {/* Slider 2: Social Posts */}
            <div>
              <div className="flex justify-between text-[11px] sm:text-xs text-slate-300 mb-1.5 sm:mb-2">
                <span className="font-semibold">Monthly Promotional Reels & Playtests:</span>
                <span className="text-[#D4FF00] font-extrabold text-xs sm:text-sm font-mono">{socialFrequency} Posts / Month</span>
              </div>
              <input
                type="range"
                min="2"
                max="10"
                step="1"
                value={socialFrequency}
                onChange={(e) => setSocialFrequency(Number(e.target.value))}
                className="w-full accent-[#D4FF00] cursor-pointer h-2 bg-white/10 rounded-lg"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-slate-500 mt-1">
                <span>2 Posts (Reviews & Drills)</span>
                <span>10 Posts (High Frequency Viral)</span>
              </div>
            </div>

          </div>

          {/* Calculator Output Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/5">
            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02]">
              <span className="text-[10px] sm:text-[11px] text-slate-400 block">Direct Court Attendees</span>
              <span className="text-base sm:text-xl font-bold text-white font-heading">
                {directLiveImpressions.toLocaleString('en-US')}+
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 block">Spectators & competitors</span>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02]">
              <span className="text-[10px] sm:text-[11px] text-slate-400 block">Annual Digital Reach</span>
              <span className="text-base sm:text-xl font-bold text-white font-heading">
                {socialImpressionsYear.toLocaleString('en-US')}+
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 block">TikTok & IG impressions</span>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02]">
              <span className="text-[10px] sm:text-[11px] text-slate-400 block">Total Brand Impressions</span>
              <span className="text-base sm:text-xl font-bold text-[#D4FF00] font-heading">
                {totalProjectedImpressions.toLocaleString('en-US')}+
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 block">Ramsports exposure</span>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.02]">
              <span className="text-[10px] sm:text-[11px] text-slate-400 block">Efficiency vs Paid Ads</span>
              <span className="text-base sm:text-xl font-bold text-emerald-400 font-heading">
                68% Lower CPM
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 block">Authentic athlete trust</span>
            </div>
          </div>
        </div>

        {/* Sponsorship Packages Tier Cards */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black font-display text-white uppercase tracking-tight">
              SPONSORSHIP & PARTNERSHIP TIERS
            </h3>
            <p className="text-[11px] sm:text-sm text-slate-300 mt-1 max-w-xl mx-auto font-normal leading-relaxed">
              Structured collaboration frameworks customizable to align with Ramsports Global brand expansion objectives in Southeast Asia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {SPONSORSHIP_TIERS.map((tier) => {
              const isSelected = selectedTierId === tier.id;
              const isRecommended = tier.recommended;

              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`relative cursor-pointer rounded-3xl p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 card-luxury ${
                    isRecommended
                      ? 'border-2 border-[#D4FF00] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,255,0,0.25)] sm:-translate-y-2.5 bg-gradient-to-b from-[#D4FF00]/10 via-black/80 to-black/90'
                      : 'border-white/10 hover:border-white/25 hover:-translate-y-1'
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-[#D4FF00] text-black text-[10px] sm:text-[11px] font-black uppercase tracking-wider sm:tracking-widest font-mono-code shadow-md glow-volt-sm whitespace-nowrap">
                      RECOMMENDED FOR BRAND IMPACT
                    </div>
                  )}

                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono-code font-bold text-slate-400 uppercase tracking-widest">
                      {tier.subtitle}
                    </div>
                    <h4 className="text-lg sm:text-2xl font-black font-display text-white mt-1 leading-snug">
                      {tier.name}
                    </h4>

                    <div className="mt-3.5 sm:mt-4 pb-3.5 sm:pb-4 border-b border-white/10">
                      <span className="text-[11px] sm:text-xs text-slate-400 block font-mono-code uppercase font-semibold">Commitment Format:</span>
                      <span className="text-xs sm:text-sm font-bold text-[#D4FF00] mt-0.5 block font-mono-code">
                        {tier.investmentTier}
                      </span>
                    </div>

                    {/* Synergy Highlight Quote */}
                    <div className="mt-3.5 sm:mt-4 p-3 sm:p-3.5 rounded-2xl bg-black/40 border border-white/5 text-[11px] sm:text-xs text-slate-300 italic leading-relaxed">
                      "{tier.synergyHighlight}"
                    </div>

                    {/* Features list */}
                    <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5">
                      <span className="text-[10px] sm:text-[11px] font-mono-code font-bold text-slate-400 uppercase tracking-wider block">
                        Included Benefits & Support:
                      </span>
                      {tier.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Deliverables */}
                    <div className="mt-5 sm:mt-6 space-y-1.5 sm:space-y-2 pt-3.5 sm:pt-4 border-t border-white/10">
                      <span className="text-[10px] sm:text-[11px] font-mono-code font-bold text-slate-400 uppercase tracking-wider block">
                        Player Outputs & Deliverables:
                      </span>
                      {tier.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] mt-1.5 shrink-0" />
                          <span className="leading-snug">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10">
                    <a
                      href={`https://wa.me/${INITIAL_ATHLETE_PROFILE.whatsappNumber}?text=Hello%20Muhammad%20Sulthan%20Rafy,%20we%20from%20Ramsports%20are%20interested%20in%20discussing%20the%20${encodeURIComponent(tier.name)}%20package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 sm:py-3.5 rounded-2xl text-[11px] sm:text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer font-mono-code ${
                        isRecommended
                          ? 'bg-[#D4FF00] text-black hover:bg-lime-300 shadow-lg glow-volt-sm hover:scale-[1.02]'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      <span>Inquire & Partner</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pitch Summary CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenDeckModal}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4FF00] hover:underline"
          >
            <span>Need a complete formal proposal deck in printable / PDF format? Open Executive Summary &rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
};
