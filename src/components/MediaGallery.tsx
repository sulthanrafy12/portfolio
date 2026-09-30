import React, { useState } from 'react';
import { 
  Images, 
  UploadCloud, 
  ExternalLink, 
  Instagram, 
  Eye, 
  CheckCircle, 
  Share2, 
  Sparkles,
  Layers,
  X
} from 'lucide-react';
import { MEDIA_COLLECTION, SOCIAL_STATS, INITIAL_ATHLETE_PROFILE } from '../data/athleteData';
import { MediaItem } from '../types';
import { resolveMediaUrl } from '../utils/mediaStorage';

interface MediaGalleryProps {
  onOpenMediaModal: () => void;
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({ onOpenMediaModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filteredItems = MEDIA_COLLECTION.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'trophy') return item.category === 'trophy';
    if (selectedCategory === 'action') return item.category === 'action' || item.category === 'profile';
    if (selectedCategory === 'social') return item.category === 'social';
    if (selectedCategory === 'gear') return item.category === 'gear';
    return true;
  });

  return (
    <section id="media" className="py-20 bg-[#0E121A] text-slate-100 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <Images className="w-4 h-4 text-[#D4FF00] shrink-0" />
              <span className="text-[10px] sm:text-xs font-mono-code font-bold uppercase tracking-wider sm:tracking-widest text-[#D4FF00]">
                AUTHENTIC ASSET VAULT & ARCHIVE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
              COMPLETE PLAYER MEDIA VAULT (15 FILES)
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
              Official catalog of match action photographs, verified podium certificates, gear showcases, match video footage, and social reach insights.
            </p>
          </div>

          <button
            onClick={onOpenMediaModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-[#D4FF00] text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest hover:bg-lime-300 transition-all hover:scale-105 shadow-xl glow-volt-sm cursor-pointer font-mono-code"
          >
            <UploadCloud className="w-4 h-4" />
            <span>Manage Files Vault</span>
          </button>
        </div>

        {/* Social Reach Special Feature Cards (my instagram.png & mytiktok.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
          {SOCIAL_STATS.map((social) => {
            const isInstagram = social.platform === 'Instagram';

            return (
              <div
                key={social.platform}
                className="p-4 sm:p-7 rounded-3xl card-luxury card-luxury-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 sm:pb-3.5 border-b border-white/10">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-md ${
                          isInstagram
                            ? 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600'
                            : 'bg-black border border-white/20'
                        }`}
                      >
                        {isInstagram ? <Instagram className="w-4 sm:w-5 h-4 sm:h-5" /> : 'TT'}
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold font-display text-white">
                          {social.platform} Official
                        </h4>
                        <span className="text-[11px] sm:text-xs text-slate-400 font-mono-code">
                          {social.handle}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] sm:text-[11px] font-mono-code text-[#D4FF00] bg-[#D4FF00]/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#D4FF00]/30 glow-volt-sm">
                      File: {social.fileName}
                    </span>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4 sm:mt-5 text-center">
                    <div className="p-2 sm:p-3 rounded-2xl bg-black/40 border border-white/5">
                      <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono-code block">Followers / Likes</span>
                      <span className="text-base sm:text-xl font-black text-white font-display">{social.followers}</span>
                    </div>
                    <div className="p-2 sm:p-3 rounded-2xl bg-black/40 border border-white/5">
                      <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono-code block">Monthly Reach</span>
                      <span className="text-base sm:text-xl font-black text-[#D4FF00] font-display">{social.monthlyReach}</span>
                    </div>
                    <div className="p-2 sm:p-3 rounded-2xl bg-black/40 border border-white/5">
                      <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono-code block">Engagement</span>
                      <span className="text-base sm:text-xl font-black text-emerald-400 font-display">{social.engagementRate}</span>
                    </div>
                  </div>

                  <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs text-slate-300 font-normal leading-relaxed">
                    <strong className="text-slate-100 font-semibold font-mono-code">Audience Demographic:</strong> {social.primaryAudience}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-mono-code">
                  <span className="text-slate-400">Verified analytics screenshot</span>
                  <button
                    onClick={() => {
                      const item = MEDIA_COLLECTION.find((m) => m.fileName === social.fileName);
                      if (item) setSelectedItem(item);
                    }}
                    className="text-[#D4FF00] hover:underline flex items-center gap-1.5 font-bold cursor-pointer"
                  >
                    <span>Inspect Proof</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 mt-8 sm:mt-10">
          {[
            { id: 'all', label: 'All 15 Assets' },
            { id: 'trophy', label: 'Trophies & Certificates (9)' },
            { id: 'action', label: 'Match Photos & Action (3)' },
            { id: 'gear', label: 'Ramsports Typhoon Gear (1)' },
            { id: 'social', label: 'Social Insights (2)' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#D4FF00] text-black shadow-md glow-volt-sm font-extrabold'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-7">
          {filteredItems.map((item) => {
            const itemUrl = resolveMediaUrl(item.fileName);
            const isVideo = item.category === 'video';

            return (
              <div
                key={item.fileName}
                onClick={() => setSelectedItem(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden card-luxury transition-all duration-300 hover:scale-[1.03] hover:border-[#D4FF00]/50 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,255,0,0.2)]"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
                  <img
                    src={itemUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = item.highResStockFallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur-sm text-[9px] font-mono-code font-bold text-white uppercase tracking-wider border border-white/15">
                    {item.category}
                  </div>

                  {isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-12 h-12 rounded-full bg-[#D4FF00] text-black flex items-center justify-center shadow-xl glow-volt font-bold text-sm">
                        ▶
                      </span>
                    </div>
                  )}

                  {/* Bottom Filename */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/75 backdrop-blur-sm border border-white/10">
                    <span className="block text-[11px] font-mono-code font-bold text-[#D4FF00] truncate">
                      {item.fileName}
                    </span>
                    <span className="block text-[10px] text-slate-300 truncate mt-0.5 font-medium">
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sync Local Files Help Tip */}
        <div className="mt-10 p-5 rounded-2xl card-luxury border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D4FF00]/15 flex items-center justify-center shrink-0 border border-[#D4FF00]/30 glow-volt-sm">
              <Sparkles className="w-4 h-4 text-[#D4FF00]" />
            </div>
            <span>
              All 15 authentic assets are organized in <code className="text-[#D4FF00] font-mono-code bg-black/50 px-2 py-0.5 rounded border border-white/10">/public/assets/</code>. You can download the full package anytime as a unified ZIP archive.
            </span>
          </div>
          <button
            onClick={onOpenMediaModal}
            className="shrink-0 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold font-mono-code transition-colors border border-white/10 cursor-pointer"
          >
            Open File Manager &rarr;
          </button>
        </div>

      </div>

      {/* Lightbox / Modal for single media item */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl card-luxury border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col bg-[#06080D]/95">
            
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div className="flex items-center gap-2.5 truncate">
                <span className="text-xs font-mono-code font-bold px-2.5 py-1 rounded-lg bg-[#D4FF00]/15 text-[#D4FF00] border border-[#D4FF00]/30 glow-volt-sm">
                  {selectedItem.fileName}
                </span>
                <span className="text-sm sm:text-base font-bold font-display text-white truncate">
                  {selectedItem.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative max-h-[58vh] bg-black/80 flex items-center justify-center overflow-hidden p-2">
              <img
                src={resolveMediaUrl(selectedItem.fileName)}
                alt={selectedItem.title}
                className="max-h-[55vh] w-auto object-contain rounded-xl shadow-2xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = selectedItem.highResStockFallback;
                }}
              />
            </div>

            <div className="p-6 overflow-y-auto">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {selectedItem.description}
              </p>
              
              <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-400 font-mono-code">
                  Asset Category: <strong className="text-[#D4FF00] capitalize">{selectedItem.category}</strong>
                </span>

                <div className="flex items-center gap-2.5">
                  <a
                    href={`https://wa.me/${INITIAL_ATHLETE_PROFILE.whatsappNumber}?text=Hello%20Muhammad%20Sulthan%20Rafy,%20we%20reviewed%20asset%20${encodeURIComponent(selectedItem.fileName)}%20and%20are%20interested%20in%20sponsorship.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-bold font-mono-code bg-[#D4FF00] text-black hover:bg-lime-300 transition-all flex items-center gap-1.5 glow-volt-sm cursor-pointer"
                  >
                    <span>Inquire Asset</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
