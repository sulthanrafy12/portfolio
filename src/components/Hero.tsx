import React, { useState } from 'react';
import { 
  Trophy, 
  Flame, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Zap,
  Sparkles,
  Layers,
  Award,
  Medal,
  Phone,
  Instagram
} from 'lucide-react';
import { AthleteProfile, PerformanceStats } from '../types';
import { resolveMediaUrl } from '../utils/mediaStorage';

interface HeroProps {
  profile: AthleteProfile;
  stats: PerformanceStats;
  onOpenDeckModal: () => void;
  onOpenMediaModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  stats,
  onOpenDeckModal,
  onOpenMediaModal,
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'profile' | 'podium' | 'game'>('profile');

  const mediaTabs = [
    { id: 'profile' as const, label: 'Player Portrait', fileName: 'fotoprofil.jpg' },
    { id: 'podium' as const, label: 'Podium Glory', fileName: 'fotomenggunakanmedali.jpg' },
    { id: 'game' as const, label: 'Court Action', fileName: 'foto in game.jpg' },
  ];

  const currentFileName = mediaTabs.find((t) => t.id === activeMediaTab)?.fileName || 'fotoprofil.jpg';
  const currentImageUrl = resolveMediaUrl(currentFileName);

  return (
    <section id="hero" className="relative min-h-[90vh] pt-24 sm:pt-32 pb-14 sm:pb-20 flex items-center overflow-hidden">
      {/* Background Graphic Elements & Court Lines */}
      <div className="absolute inset-0 bg-[#080B10] dark:bg-[#080B10] pointer-events-none overflow-hidden">
        {/* Subtle athletic field lines & glow */}
        <div className="absolute inset-0 court-lines-pattern opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_60%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[750px] h-[550px] bg-[#D4FF00]/12 blur-[140px] rounded-full animate-float-slow pointer-events-none" />
        <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080B10] to-transparent pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Partnership Proposal Pitch */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-7">
            
            {/* Top Brand Partnership Kicker */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md shadow-sm">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D4FF00] animate-ping" />
                <span className="text-[9px] sm:text-[11px] font-mono-code font-bold tracking-wider sm:tracking-widest uppercase text-slate-200">
                  OFFICIAL SPONSORSHIP PORTFOLIO 2026/2027
                </span>
              </div>
              <span className="text-[9px] sm:text-xs font-mono-code font-bold text-[#D4FF00] tracking-wide uppercase px-2.5 py-0.5 sm:py-1 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 glow-volt-sm">
                TARGET: RAMSPORTS GLOBAL
              </span>
            </div>

            {/* Main Headline with Syne font-display - Optimized for Smartphones */}
            <div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight sm:tracking-tighter leading-[1.12] sm:leading-[1.04] text-white">
                BUILT TO COMPETE. <br />
                <span className="shimmer-text block mt-1">
                  POWERED FOR THE PODIUM.
                </span>
              </h1>
              <p className="mt-3 sm:mt-5 text-xs sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Official partnership portfolio of competitive athlete <strong className="text-white font-semibold">{profile.name}</strong> for global brand <strong className="text-[#D4FF00] font-semibold tracking-wide">RAMSPORTS</strong>. Combining proven championship victories, high DUPR ratings, and active viral engagement across the booming Indonesian pickleball ecosystem.
              </p>
            </div>

            {/* Personal Information & Credentials Badge */}
            <div className="p-3.5 sm:p-5 rounded-2xl card-luxury border border-[#D4FF00]/40 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D4FF00]/10 transition-colors" />
              
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 pb-2.5 sm:pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#D4FF00] shadow-[0_0_10px_#D4FF00]" />
                  <span className="text-[11px] sm:text-xs font-bold font-display uppercase tracking-wider text-white">
                    Verified Athlete Credentials · {profile.name} (Age {profile.age})
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-code text-[10px] sm:text-[11px] font-bold border border-emerald-500/30">
                    Athlete: 2022–Present
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono-code text-[10px] sm:text-[11px] font-bold border border-cyan-500/30">
                    Coach: Since 2024
                  </span>
                </div>
              </div>

              {/* ID Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mt-3 text-xs">
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono-code uppercase block">Global ID (PGID)</span>
                  <span className="font-mono-code font-black text-white text-xs sm:text-base tracking-wider">#{profile.pgid}</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-white/10 hover:border-[#D4FF00]/40 transition-colors">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono-code uppercase block">DUPR Player ID</span>
                  <span className="font-mono-code font-black text-[#D4FF00] text-xs sm:text-base tracking-wider">{profile.duprId}</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono-code uppercase block">Domicile & Base</span>
                  <span className="font-bold text-white text-[11px] sm:text-xs truncate block mt-0.5">{profile.location}</span>
                </div>
                <div className="p-2 sm:p-2.5 rounded-xl bg-black/50 border border-white/10 hover:border-white/20 transition-colors">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono-code uppercase block">WhatsApp Direct</span>
                  <span className="font-mono-code font-bold text-slate-200 text-[11px] sm:text-xs truncate block mt-0.5">089687352370</span>
                </div>
              </div>

              {/* Key Achievements Bullet Highlights */}
              <div className="mt-3 pt-2.5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200">
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/[0.02]">
                  <span className="text-amber-400 text-xs sm:text-sm">🥇</span>
                  <span><strong>Gold:</strong> Kadispora Cup (Singles & Doubles)</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-300 text-xs sm:text-sm">🥈</span>
                  <span><strong>Silver:</strong> Universitas Negeri Jakarta (Doubles)</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/[0.02]">
                  <span className="text-amber-600 text-xs sm:text-sm">🥉</span>
                  <span><strong>Bronze:</strong> Universitas Indonesia Open</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/[0.02]">
                  <span className="text-slate-300 text-xs sm:text-sm">🥈</span>
                  <span><strong>Silver:</strong> ITB Open (Men's Doubles)</span>
                </div>
              </div>
            </div>

            {/* Metric Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 py-1">
              <div className="p-3 sm:p-4 rounded-2xl card-luxury card-luxury-hover group">
                <span className="text-[9px] sm:text-[11px] font-mono-code text-slate-400 block uppercase">DUPR Rating</span>
                <div className="flex items-baseline gap-1 mt-1 sm:mt-1.5">
                  <span className="text-xl sm:text-3xl font-black font-display text-white">{profile.duprDoubles}</span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#D4FF00]">MD</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono-code text-slate-500 mt-0.5 sm:mt-1 block">{profile.duprSingles} Singles</span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl card-luxury card-luxury-hover group">
                <span className="text-[9px] sm:text-[11px] font-mono-code text-slate-400 block uppercase">Podium Record</span>
                <div className="flex items-baseline gap-1 mt-1 sm:mt-1.5">
                  <span className="text-xl sm:text-3xl font-black font-display text-white">{stats.podiumsTotal}x</span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-amber-400">Podiums</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1 block">2 Gold · 3 Silver · 2 Bronze</span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl card-luxury card-luxury-hover group">
                <span className="text-[9px] sm:text-[11px] font-mono-code text-slate-400 block uppercase">Win Rate</span>
                <div className="flex items-baseline gap-1 mt-1 sm:mt-1.5">
                  <span className="text-xl sm:text-3xl font-black font-display text-[#D4FF00]">{stats.winRate}%</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono-code text-slate-400 mt-0.5 sm:mt-1 block">{stats.matchesWon}W / {stats.matchesPlayed} Matches</span>
              </div>

              <div className="p-3 sm:p-4 rounded-2xl card-luxury card-luxury-hover group">
                <span className="text-[9px] sm:text-[11px] font-mono-code text-slate-400 block uppercase">Base Circuit</span>
                <div className="flex items-baseline gap-1 mt-1 sm:mt-1.5">
                  <span className="text-lg sm:text-xl font-black font-display text-white truncate">Bekasi, ID</span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 sm:mt-1 block">Greater Jakarta circuit</span>
              </div>
            </div>

            {/* Action CTAs with radiant glows */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-2">
              <button
                onClick={onOpenDeckModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:px-6 sm:py-3.5 rounded-xl font-extrabold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest bg-[#D4FF00] text-black hover:bg-lime-300 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(212,255,0,0.45)] cursor-pointer text-center"
              >
                <span>Review Sponsorship Pitch</span>
                <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0" />
              </button>

              <a
                href={`https://wa.me/${profile.whatsappNumber}?text=Hello%20Muhammad%20Sulthan%20Rafy,%20we%20are%20from%20the%20Ramsports%20team%20and%20would%20love%20to%20discuss%20a%20sponsorship%20partnership.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl font-bold text-[11px] sm:text-xs uppercase tracking-wider bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 hover:border-[#D4FF00]/50 transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-md text-center"
              >
                <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00] shrink-0" />
                <span>Direct WhatsApp Chat</span>
              </a>

              <a
                href="#tournaments"
                className="w-full sm:w-auto text-center justify-center px-3 py-2 text-[11px] sm:text-xs font-semibold text-slate-400 hover:text-[#D4FF00] transition-colors flex items-center gap-1"
              >
                <span>View 7 Tournament Titles</span>
                <span className="text-[#D4FF00]">&rarr;</span>
              </a>
            </div>

            {/* Brand alignment guarantee */}
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-400 pt-1">
              <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#D4FF00]/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D4FF00]" />
              </div>
              <span>
                Equipped & ready to represent <strong className="text-slate-100 font-semibold">Ramsports Global</strong> paddles & technical gear across all 2026/2027 regional tours.
              </span>
            </div>

          </div>

          {/* Right Column: Athlete Media Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Interactive Spotlight Card */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden card-luxury border border-white/15 shadow-2xl p-1.5 transition-all duration-500 hover:border-[#D4FF00]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,255,0,0.2)]">
              
              {/* Media Switcher Tab Header */}
              <div className="bg-black/60 backdrop-blur-md p-1.5 rounded-t-2xl flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-1">
                  {mediaTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveMediaTab(tab.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        activeMediaTab === tab.id
                          ? 'bg-[#D4FF00] text-black font-bold shadow-sm glow-volt-sm'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={onOpenMediaModal}
                  title="View authentic photo vault"
                  className="px-2.5 py-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-[#D4FF00] transition-colors text-xs flex items-center gap-1 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-[#D4FF00]" />
                  <span className="text-[10px] font-mono-code font-bold">15 Files</span>
                </button>
              </div>

              {/* Main Image Frame with Luxury Overlay */}
              <div className="relative aspect-[4/5] w-full rounded-2xl bg-slate-950 overflow-hidden group">
                <img
                  src={currentImageUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      '/assets/fotoprofil.jpg';
                  }}
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B10] via-[#080B10]/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[#D4FF00]/40 shadow-lg">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D4FF00] shadow-[0_0_8px_#D4FF00]" />
                  <span className="text-[9px] sm:text-[10px] font-mono-code font-bold text-white tracking-wider sm:tracking-widest uppercase">
                    RAMSPORTS ATHLETE CANDIDATE
                  </span>
                </div>

                {/* File Name Tag */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[9px] sm:text-[10px] font-mono-code text-slate-300">
                  {currentFileName}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-2xl card-luxury border border-white/15 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base sm:text-xl font-black text-white font-display tracking-tight">
                        {profile.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                        {profile.discipline}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono-code font-semibold block">Podium Track</span>
                      <span className="text-xs sm:text-sm font-black text-[#D4FF00] font-display">
                        7x Titles & Medals
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#D4FF00]" />
                      {profile.location}
                    </span>
                    <span className="font-semibold text-emerald-400 font-mono-code text-[10px] sm:text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Tour 2026/2027
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick caption */}
            <p className="mt-3 text-xs text-slate-400 text-center flex items-center gap-1.5 font-mono-code">
              <span>Authentic media asset:</span>
              <code className="text-[#D4FF00] font-mono-code bg-white/5 px-2 py-0.5 rounded border border-white/10 text-[11px]">
                {currentFileName}
              </code>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
