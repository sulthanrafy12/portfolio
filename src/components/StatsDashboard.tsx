import React, { useState } from 'react';
import { 
  Activity, 
  TrendingUp, 
  Zap, 
  ShieldAlert, 
  Target, 
  RefreshCw, 
  Sliders, 
  CheckCircle, 
  Flame, 
  Crosshair,
  BarChart3,
  Clock,
  Radio
} from 'lucide-react';
import { PerformanceStats, AthleteProfile } from '../types';

interface StatsDashboardProps {
  stats: PerformanceStats;
  profile: AthleteProfile;
  isApiLive: boolean;
  onToggleApiLive: () => void;
  onRefreshApi: () => void;
  onOpenApiModal: () => void;
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({
  stats,
  profile,
  isApiLive,
  onToggleApiLive,
  onRefreshApi,
  onOpenApiModal,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    onRefreshApi();
    setTimeout(() => setIsRefreshing(false), 600);
  };

  return (
    <section id="stats" className="py-24 bg-[#080B10] text-slate-100 relative border-t border-b border-white/10 overflow-hidden">
      {/* Background Court Geometry Glow */}
      <div className="absolute inset-0 court-lines-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#D4FF00]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Live API Sync Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#D4FF00] shadow-[0_0_10px_#D4FF00] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider sm:tracking-widest text-[#D4FF00]">
                TELEMETRY & ATHLETE PERFORMANCE DATA
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
              REAL-TIME PERFORMANCE DASHBOARD
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
              Court metrics validated by DUPR (Dynamic Universal Pickleball Rating) benchmarks and official tournament results, streamed dynamically via REST API simulation.
            </p>
          </div>

          {/* Interactive API Sync Control Strip */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 card-luxury p-2 rounded-2xl border border-white/15 shadow-xl">
            
            {/* Auto Live Toggle */}
            <button
              onClick={onToggleApiLive}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono-code font-bold transition-all cursor-pointer ${
                isApiLive 
                  ? 'bg-[#D4FF00] text-black shadow-md glow-volt-sm' 
                  : 'bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <Radio className={`w-3.5 h-3.5 ${isApiLive ? 'animate-pulse' : ''}`} />
              <span>{isApiLive ? 'Live Sync Active' : 'Live Sync Off'}</span>
            </button>

            {/* Manual Refresh Trigger */}
            <button
              onClick={handleManualRefresh}
              title="Pull latest telemetry from API endpoint"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#D4FF00]' : 'text-slate-400'}`} />
              <span>Refresh API</span>
            </button>

            {/* Simulator / API Modal Trigger */}
            <button
              onClick={onOpenApiModal}
              title="Configure API data payload or simulate match results"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold bg-[#D4FF00]/10 hover:bg-[#D4FF00]/20 text-[#D4FF00] border border-[#D4FF00]/30 transition-colors cursor-pointer"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Simulator</span>
            </button>

            {/* Timestamp */}
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-slate-400 px-2.5 py-1 sm:py-1.5 bg-black/40 rounded-xl border border-white/10 font-mono-code">
              <Clock className="w-3 h-3 text-[#D4FF00]" />
              <span className="text-[10px] text-slate-300">{stats.lastSyncTime}</span>
            </div>

          </div>
        </div>

        {/* Primary DUPR & Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
          
          {/* Card 1: DUPR Rating */}
          <div className="p-4 sm:p-6 rounded-3xl card-luxury card-luxury-hover relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#D4FF00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D4FF00]/10 transition-colors" />
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono-code font-bold uppercase tracking-wider text-slate-300 text-[11px] sm:text-xs">Official DUPR</span>
              <span className="text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-code font-bold border border-emerald-500/30">
                Verified Pro Tier
              </span>
            </div>
            
            <div className="mt-3 sm:mt-4 flex items-baseline gap-2.5 sm:gap-3">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
                {profile.duprDoubles}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-[#D4FF00] bg-[#D4FF00]/15 px-2.5 py-1 rounded-lg border border-[#D4FF00]/30 font-mono-code">
                Men's Doubles
              </div>
            </div>

            <div className="mt-2.5 flex items-center justify-between text-[11px] sm:text-xs text-slate-400 pt-2 border-t border-white/10">
              <span className="font-mono-code">Men's Singles (MS):</span>
              <span className="font-bold text-white font-mono-code text-xs sm:text-sm">{profile.duprSingles}</span>
            </div>

            {/* Progress bar towards 5.5 Pro Benchmark */}
            <div className="mt-3.5 sm:mt-4">
              <div className="flex justify-between text-[10px] sm:text-[11px] font-mono-code text-slate-400 mb-1.5">
                <span>Pro Progression</span>
                <span className="text-white font-bold">93.4% of 5.5 Pro</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5">
                <div
                  className="h-full bg-gradient-to-r from-lime-400 to-[#D4FF00] rounded-full transition-all duration-1000 shadow-[0_0_10px_#D4FF00]"
                  style={{ width: `${(profile.duprDoubles / 5.5) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Win Rate & Matches */}
          <div className="p-4 sm:p-6 rounded-3xl card-luxury card-luxury-hover relative overflow-hidden group">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono-code font-bold uppercase tracking-wider text-slate-300 text-[11px] sm:text-xs">Win-Loss Ratio</span>
              <span className="text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full bg-[#D4FF00]/15 text-[#D4FF00] font-mono-code font-bold border border-[#D4FF00]/30">
                Streak: {stats.currentStreak} W
              </span>
            </div>

            <div className="mt-3 sm:mt-4 flex items-baseline gap-2.5 sm:gap-3">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-[#D4FF00]">
                {stats.winRate}%
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-slate-300 font-mono-code">
                {stats.matchesWon}W - {stats.matchesPlayed - stats.matchesWon}L
              </div>
            </div>

            <p className="mt-2 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              Aggregated across 52 official competitive matches in regional & national tournament brackets.
            </p>

            <div className="mt-3.5 sm:mt-4">
              <div className="flex justify-between text-[10px] sm:text-[11px] font-mono-code text-slate-400 mb-1.5">
                <span>Match Point Efficiency</span>
                <span className="text-white font-bold">{stats.winRate}% Win</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden p-0.5">
                <div
                  className="h-full bg-[#D4FF00] rounded-full transition-all duration-1000 shadow-[0_0_10px_#D4FF00]"
                  style={{ width: `${stats.winRate}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Podium Conversion Rate */}
          <div className="p-4 sm:p-6 rounded-3xl card-luxury card-luxury-hover relative overflow-hidden group">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono-code font-bold uppercase tracking-wider text-slate-300 text-[11px] sm:text-xs">Podium Conversion</span>
              <span className="text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono-code font-bold border border-amber-500/30">
                7x Titles
              </span>
            </div>

            <div className="mt-3 sm:mt-4 flex items-baseline gap-2.5 sm:gap-3">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
                {((stats.podiumsTotal / stats.tournamentsCompeted) * 100).toFixed(1)}%
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-amber-400 font-mono-code">
                {stats.podiumsTotal}/{stats.tournamentsCompeted} Events
              </div>
            </div>

            <div className="mt-2.5 sm:mt-3 flex items-center gap-1 sm:gap-1.5 text-xs text-slate-300">
              <span className="px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 font-bold font-mono-code text-[9px] sm:text-[10px] border border-amber-400/30">2 Gold</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-300/20 text-slate-200 font-bold font-mono-code text-[9px] sm:text-[10px] border border-slate-300/30">3 Silver</span>
              <span className="px-2 py-0.5 rounded-md bg-amber-700/30 text-amber-500 font-bold font-mono-code text-[9px] sm:text-[10px] border border-amber-600/30">2 Bronze</span>
            </div>

            <div className="mt-3.5 sm:mt-4 pt-2.5 border-t border-white/10 text-[10px] sm:text-[11px] text-slate-400 flex items-center justify-between font-mono-code">
              <span>Semifinal Advancement:</span>
              <span className="text-emerald-400 font-bold">88.8%</span>
            </div>
          </div>

          {/* Card 4: Smash Power & Attacking Pace */}
          <div className="p-4 sm:p-6 rounded-3xl card-luxury card-luxury-hover relative overflow-hidden group">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono-code font-bold uppercase tracking-wider text-slate-300 text-[11px] sm:text-xs">Attack Velocity</span>
              <span className="text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono-code font-bold border border-cyan-500/30">
                Radar Sensor
              </span>
            </div>

            <div className="mt-3 sm:mt-4 flex items-baseline gap-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white">
                {stats.avgSmashSpeedKmh}
              </div>
              <div className="text-xs font-bold text-slate-400 font-mono-code">
                km/h
              </div>
            </div>

            <p className="mt-2 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
              Recorded peak overhead smash and forehand drive speed reaching 104 km/h with heavy top spin.
            </p>

            <div className="mt-3.5 sm:mt-4 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 font-mono-code">
              <span>With Ramsports Typhoon:</span>
              <span className="text-[#D4FF00] font-bold">+12% Spin & Pop</span>
            </div>
          </div>

        </div>

        {/* Detailed Technical Court Metrics (Shot Matrix) */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-8 rounded-3xl card-luxury border border-white/15 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-white/10">
            <div>
              <h3 className="text-base sm:text-2xl font-black font-display text-white flex items-center gap-2 sm:gap-2.5">
                <Target className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4FF00] shrink-0" />
                <span>Tactical Shot Matrix & Precision Analytics</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">
                Measured on-court technical execution: non-volley zone (kitchen) reset rates, firefight conversions, and unforced error discipline.
              </p>
            </div>

            <div className="text-[10px] sm:text-xs text-slate-300 flex items-center gap-2 font-mono-code bg-black/40 px-3 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
              <span>Pro Level 5.0+ Benchmark</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mt-5 sm:mt-6">
            
            {/* Metric 1 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#D4FF00]/40 transition-colors">
              <div className="flex items-center justify-between text-xs mb-1.5 sm:mb-2">
                <span className="text-slate-300 font-medium text-[11px] sm:text-xs">Third-Shot Drop</span>
                <span className="font-black font-mono-code text-[#D4FF00] text-xs sm:text-sm">{stats.thirdShotDropPct}%</span>
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden p-0.5 mb-1.5 sm:mb-2">
                <div
                  className="h-full bg-[#D4FF00] rounded-full shadow-[0_0_8px_#D4FF00]"
                  style={{ width: `${stats.thirdShotDropPct}%` }}
                />
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                Crucial baseline-to-kitchen transition with soft unattackable bounce arc.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center justify-between text-xs mb-1.5 sm:mb-2">
                <span className="text-slate-300 font-medium text-[11px] sm:text-xs">Speed-Up Attack</span>
                <span className="font-black font-mono-code text-white text-xs sm:text-sm">{stats.speedUpConversionPct}%</span>
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden p-0.5 mb-1.5 sm:mb-2">
                <div
                  className="h-full bg-emerald-400 rounded-full shadow-[0_0_8px_#34D399]"
                  style={{ width: `${stats.speedUpConversionPct}%` }}
                />
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                Conversion rate when initiating sudden body speed-ups out of dinking battles.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-[#D4FF00]/40 transition-colors">
              <div className="flex items-center justify-between text-xs mb-1.5 sm:mb-2">
                <span className="text-slate-300 font-medium text-[11px] sm:text-xs">Dink Rally Endurance</span>
                <span className="font-black font-mono-code text-[#D4FF00] text-xs sm:text-sm">{stats.dinkRallyEndurancePct}%</span>
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden p-0.5 mb-1.5 sm:mb-2">
                <div
                  className="h-full bg-[#D4FF00] rounded-full shadow-[0_0_8px_#D4FF00]"
                  style={{ width: `${stats.dinkRallyEndurancePct}%` }}
                />
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                Cross-court kitchen dink consistency without hitting net on 15+ shot rallies.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/10 hover:border-emerald-400/40 transition-colors">
              <div className="flex items-center justify-between text-xs mb-1.5 sm:mb-2">
                <span className="text-slate-300 font-medium text-[11px] sm:text-xs">Unforced Errors / Set</span>
                <span className="font-black font-mono-code text-emerald-400 text-xs sm:text-sm">{stats.unforcedErrorsAvg} avg</span>
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden p-0.5 mb-1.5 sm:mb-2">
                <div
                  className="h-full bg-emerald-400 rounded-full shadow-[0_0_8px_#34D399]"
                  style={{ width: '85%' }}
                />
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                Exceptional point discipline reflecting clutch mental maturity under pressure.
              </p>
            </div>

          </div>
        </div>

        {/* Live Recent Match Ticker with Glass Glow */}
        <div className="mt-6 sm:mt-8 p-3.5 sm:p-5 rounded-2xl card-luxury border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 shadow-lg">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#D4FF00]/15 border border-[#D4FF00]/40 text-[#D4FF00] text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider glow-volt-sm">
              Latest Match
            </span>
            <span className="text-[11px] sm:text-sm text-slate-200">
              Kadispora Cup Men's Final: <strong className="text-white font-bold">{profile.name} (11-8, 11-6)</strong> — CHAMPION 🥇
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-400 font-mono-code">
            <span className="hidden sm:inline">Next Target: National Pickleball Tour 2026/2027</span>
            <button
              onClick={onOpenApiModal}
              className="text-[#D4FF00] hover:underline font-bold text-[10px] sm:text-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Inspect JSON Payload</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
