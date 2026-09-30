import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Download, 
  FileText, 
  Clock, 
  Sparkles,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { INITIAL_ATHLETE_PROFILE } from '../data/athleteData';

interface ContactSectionProps {
  onOpenDeckModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDeckModal }) => {
  const [formData, setFormData] = useState({
    sponsorName: 'Ramsports Brand Team',
    contactPerson: '',
    email: '',
    phone: '',
    selectedTier: 'Tournament & Travel Title Partner',
    message: 'Hello Muhammad Sulthan Rafy, we would love to discuss an official Ramsports pickleball paddle and apparel partnership for upcoming regional and national tour events.',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(INITIAL_ATHLETE_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0B0E14] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pb-8 sm:pb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] text-[9px] sm:text-xs font-mono-code font-bold uppercase tracking-wider sm:tracking-widest mb-2.5 sm:mb-3 glow-volt-sm">
            <MessageSquare className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span>DIRECT ACCESS & PARTNERSHIP CHANNELS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase">
            CONNECT WITH ATHLETE & INITIATE PARTNERSHIP
          </h2>

          <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            Open for executive proposal reviews, on-court paddle demonstrations, sparring sessions in the Bekasi & Greater Jakarta area, or promotional digital marketing activation alignments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start mt-2 sm:mt-4">
          
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="p-4 sm:p-7 rounded-3xl card-luxury border border-[#D4FF00]/40 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF00]/5 rounded-bl-full pointer-events-none group-hover:bg-[#D4FF00]/10 transition-colors" />
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-mono-code font-black uppercase tracking-wider text-[#D4FF00] bg-[#D4FF00]/15 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#D4FF00]/30 glow-volt-sm">
                  PRIORITY RESPONSE (&lt; 2 HOURS)
                </span>
                <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#D4FF00] animate-ping shadow-[0_0_8px_#D4FF00]" />
              </div>

              <h3 className="text-lg sm:text-2xl font-black font-display text-white mt-3 sm:mt-4">
                WhatsApp Direct Connect
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed">
                Direct mobile line to Muhammad Sulthan Rafy for tournament schedules, gear samples, or executive partnership discussions.
              </p>

              <div className="mt-4 sm:mt-6">
                <a
                  href={`https://wa.me/${INITIAL_ATHLETE_PROFILE.whatsappNumber}?text=Hello%20Muhammad%20Sulthan%20Rafy,%20we%20are%20from%20Ramsports%20and%20interested%20in%20discussing%20a%20pickleball%20sponsorship%20partnership.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 sm:py-4 px-4 sm:px-5 rounded-2xl bg-[#D4FF00] hover:bg-lime-300 text-black font-black text-[11px] sm:text-xs font-mono-code uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl glow-volt-sm hover:scale-[1.02] cursor-pointer"
                >
                  <MessageSquare className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-black" />
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </a>
              </div>
            </div>

            {/* Email & Phone Details */}
            <div className="p-4 sm:p-7 rounded-3xl card-luxury border border-white/10 space-y-3 sm:space-y-4">
              
              {/* Email */}
              <div className="flex items-center justify-between text-xs pb-3 sm:pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 border border-white/10 shrink-0">
                    <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00]" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-slate-400 block text-[10px] sm:text-[11px] font-mono-code uppercase">Official Athlete Email:</span>
                    <span className="font-semibold text-white font-mono-code text-[11px] sm:text-xs truncate block">{INITIAL_ATHLETE_PROFILE.email}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10 shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold font-mono-code">Copied!</span>
                  ) : (
                    <Copy className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs pb-3 sm:pb-3.5 border-b border-white/10">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 border border-white/10 shrink-0">
                  <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] sm:text-[11px] font-mono-code uppercase">Direct Phone:</span>
                  <span className="font-semibold text-white font-mono-code text-[11px] sm:text-xs">{INITIAL_ATHLETE_PROFILE.phone}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2.5 sm:gap-3 text-xs">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 border border-white/10 shrink-0">
                  <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] sm:text-[11px] font-mono-code uppercase">Home Base & Training:</span>
                  <span className="font-semibold text-white text-[11px] sm:text-xs">{INITIAL_ATHLETE_PROFILE.location}</span>
                </div>
              </div>

            </div>

            {/* Deck Download Trigger */}
            <div className="p-4 sm:p-7 rounded-3xl card-luxury border border-white/10 flex items-center justify-between gap-3 sm:gap-4 shadow-xl">
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-display text-white">
                  Executive Sponsorship Deck
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">
                  Printable executive summary for Ramsports management meetings.
                </p>
              </div>

              <button
                onClick={onOpenDeckModal}
                className="shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-[11px] sm:text-xs font-mono-code flex items-center gap-1.5 sm:gap-2 border border-white/15 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00]" />
                <span>View Deck</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Proposal & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-8 rounded-3xl card-luxury border border-white/15 shadow-2xl relative">
              
              <div className="pb-4 sm:pb-6 border-b border-white/10">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-black font-display text-white uppercase tracking-tight">
                  SUBMIT BRAND PROPOSAL / BRIEF
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 font-normal">
                  Fill in the details below to route directly to Muhammad Sulthan Rafy's representation team.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 sm:py-12 text-center space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#D4FF00]/20 border border-[#D4FF00] flex items-center justify-center mx-auto text-[#D4FF00] glow-volt-sm">
                    <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <h4 className="text-base sm:text-xl font-black text-white font-display uppercase tracking-tight">
                    Partnership Inquiry Transmitted!
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We will review the brief from <strong className="text-[#D4FF00] font-semibold">{formData.sponsorName}</strong> and reply within 24 hours.
                  </p>
                  <div className="pt-2 sm:pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-white/10 text-[11px] sm:text-xs font-bold font-mono-code text-white hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      Submit Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold font-mono-code text-slate-300 uppercase mb-1 sm:mb-1.5">
                        Brand / Company Name:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.sponsorName}
                        onChange={(e) => setFormData({ ...formData, sponsorName: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]/40 transition-all font-sans"
                        placeholder="e.g., Ramsports Global"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold font-mono-code text-slate-300 uppercase mb-1 sm:mb-1.5">
                        Contact Person / Title:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]/40 transition-all font-sans"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold font-mono-code text-slate-300 uppercase mb-1 sm:mb-1.5">
                        Work Email:
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]/40 transition-all font-sans"
                        placeholder="name@ramsports.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-xs font-bold font-mono-code text-slate-300 uppercase mb-1 sm:mb-1.5">
                        Direct Phone / WhatsApp:
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]/40 transition-all font-sans"
                        placeholder="+62 8..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold font-mono-code text-slate-300 uppercase mb-1 sm:mb-1.5">
                      Partnership Tier Interest:
                    </label>
                    <select
                      value={formData.selectedTier}
                      onChange={(e) => setFormData({ ...formData, selectedTier: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/80 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4FF00] font-sans cursor-pointer"
                    >
                      <option value="Official Equipment & Paddle Partner">Official Equipment & Paddle Partner</option>
                      <option value="Tournament & Travel Title Partner">Tournament & Travel Title Partner (Recommended)</option>
                      <option value="Signature Brand Ambassador">Signature Brand Ambassador & Co-Branding</option>
                      <option value="Custom Collaboration / Exhibition">Custom Tour Sponsorship / Exhibition</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] sm:text-xs font-bold font-mono-code text-slate-300 uppercase mb-1 sm:mb-1.5">
                      Collaboration Details or Objectives:
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-black/50 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4FF00] focus:ring-1 focus:ring-[#D4FF00]/40 transition-all font-sans"
                      placeholder="Outline target tournaments, gear allocations, or timeline..."
                    />
                  </div>

                  <div className="pt-1.5 sm:pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#D4FF00] hover:bg-lime-300 text-black font-black text-[11px] sm:text-xs font-mono-code uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 shadow-xl glow-volt-sm transition-all hover:scale-[1.01] cursor-pointer"
                    >
                      <Send className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-black" />
                      <span>Transmit Partnership Proposal</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
