import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Flame, 
  Sparkles, 
  Zap, 
  Video, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { resolveMediaUrl } from '../utils/mediaStorage';

interface VideoReelProps {
  onOpenMediaModal: () => void;
}

export const VideoReel: React.FC<VideoReelProps> = ({ onOpenMediaModal }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTimestamp, setActiveTimestamp] = useState<string>('0:14');
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = resolveMediaUrl('videosatu.mp4');

  const timestamps = [
    { time: '0:14', label: 'ATP (Around-The-Post) Winner', desc: 'Precision curved ball placement sliding past the net post from an acute angle' },
    { time: '0:38', label: 'Fast-Hands Kitchen Dink Duel', desc: 'Lightning hand speed during intense 14-shot non-volley zone exchanges' },
    { time: '1:02', label: 'Overhead Smash Match Point', desc: 'Decisive explosive smash finish closing out the tournament game' },
  ];

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (timeStr: string) => {
    setActiveTimestamp(timeStr);
    if (!videoRef.current) return;
    const parts = timeStr.split(':');
    const seconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    videoRef.current.currentTime = seconds;
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="video" className="py-20 bg-[#0B0E14] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <Video className="w-4 h-4 text-[#D4FF00] shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider sm:tracking-widest text-[#D4FF00]">
                MATCH REEL & HIGHLIGHT FOOTAGE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
              LIVE GAMEPLAY HIGHLIGHTS
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
              Authentic on-court tournament footage highlighting reactive hand speed, tactical drop precision, and match-point composure.
            </p>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 font-mono-code text-[11px] sm:text-xs">
            <span className="bg-black/50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-white/10 text-slate-300 truncate max-w-[160px] sm:max-w-none">
              videosatu.mp4
            </span>
            <button
              onClick={onOpenMediaModal}
              className="text-[#D4FF00] hover:underline flex items-center gap-1 font-bold cursor-pointer"
            >
              <span>Manage Video</span>
            </button>
          </div>
        </div>

        {/* Video Player & Timestamp Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6 sm:mt-8 items-start">
          
          {/* Main Video Frame (Col 8) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden card-luxury border border-white/20 shadow-2xl relative group">
            
            <div className="relative aspect-video w-full bg-zinc-950 flex items-center justify-center">
              <video
                ref={videoRef}
                src={videoUrl}
                muted={isMuted}
                loop
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                poster="/assets/fotoprofil.jpg"
              />

              {/* Play overlay button if paused */}
              {!isPlaying && (
                <button
                  onClick={handlePlayToggle}
                  className="absolute z-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#D4FF00] text-black flex items-center justify-center shadow-2xl glow-volt hover:scale-110 transition-transform cursor-pointer"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                </button>
              )}

              {/* Floating watermark / brand tag & Audio Equalizer */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-xs font-mono-code shadow-xl">
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#EF4444]" />
                <span className="font-black text-white uppercase text-[9px] sm:text-[10px] tracking-wider font-display">MATCH REPLAY · 60 FPS</span>
                {isPlaying && (
                  <div className="flex items-end gap-0.5 h-3.5 pl-2 border-l border-white/20">
                    <span className="w-1 bg-[#D4FF00] rounded-full animate-eq-1" />
                    <span className="w-1 bg-cyan-400 rounded-full animate-eq-2" />
                    <span className="w-1 bg-[#D4FF00] rounded-full animate-eq-3" />
                  </div>
                )}
              </div>

              {/* Controls bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/85 to-transparent flex items-center justify-between z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={handlePlayToggle}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                  >
                    {isPlaying ? <Pause className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00]" /> : <Play className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-white" />}
                  </button>

                  <button
                    onClick={handleMuteToggle}
                    className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-slate-400" /> : <Volume2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00]" />}
                  </button>

                  <span className="text-[10px] sm:text-xs text-slate-300 font-mono-code px-2 sm:px-2.5 py-1 rounded-lg bg-black/50 border border-white/10">
                    Seek: <strong className="text-[#D4FF00]">{activeTimestamp}</strong>
                  </span>
                </div>

                <div className="text-[10px] sm:text-xs text-slate-300 font-mono-code flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                  <span className="hidden sm:inline">Ramsports Precision Ready</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Moments Selector & Key Skills (Col 4) */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-3.5">
            <h3 className="text-[10px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest text-[#D4FF00] font-mono-code flex items-center gap-1.5 sm:gap-2">
              <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span>KEY MATCH MOMENTS TELEMETRY:</span>
            </h3>

            {timestamps.map((item) => (
              <div
                key={item.time}
                onClick={() => handleSeek(item.time)}
                className={`p-3.5 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300 card-luxury ${
                  activeTimestamp === item.time
                    ? 'border-[#D4FF00] shadow-[0_0_25px_rgba(212,255,0,0.2)] bg-[#D4FF00]/10 sm:-translate-y-1'
                    : 'hover:border-white/25 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-mono-code font-black px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-black/70 text-[#D4FF00] border border-[#D4FF00]/30 glow-volt-sm">
                    {item.time}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono-code">
                    {activeTimestamp === item.time ? 'ACTIVE MOMENT' : 'PLAY CLIP &rarr;'}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold font-display text-white mt-1.5 sm:mt-2 leading-snug">
                  {item.label}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* Tactical Strengths Checklist */}
            <div className="p-4 sm:p-5 rounded-2xl card-luxury border border-white/10 space-y-2 sm:space-y-2.5 mt-3 sm:mt-4">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white block font-display">
                ON-COURT SIGNATURE PLAYING STYLE:
              </span>
              <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00] shrink-0" />
                <span>Aggressive Kitchen Counter & Dinking Control</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00] shrink-0" />
                <span>High-Spin Roll Volley & Reset Defense</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00] shrink-0" />
                <span>Clutch Focus on Crucial Game-Deciding Points</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
