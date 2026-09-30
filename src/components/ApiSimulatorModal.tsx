import React, { useState } from 'react';
import { 
  X, 
  Radio, 
  Sliders, 
  Code, 
  Save, 
  RefreshCw, 
  Check, 
  Zap, 
  Flame,
  ArrowRight,
  Database
} from 'lucide-react';
import { PerformanceStats } from '../types';
import { saveLiveStats, resetLiveStats } from '../services/statsApi';

interface ApiSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: PerformanceStats;
  onStatsUpdated: (newStats: PerformanceStats) => void;
}

export const ApiSimulatorModal: React.FC<ApiSimulatorModalProps> = ({
  isOpen,
  onClose,
  stats,
  onStatsUpdated,
}) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'json' | 'docs'>('editor');
  const [formData, setFormData] = useState<PerformanceStats>({ ...stats });
  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')} UTC (API Push)`;
    
    const updated: PerformanceStats = {
      ...formData,
      lastSyncTime: timeStr
    };
    saveLiveStats(updated);
    onStatsUpdated(updated);
    setNotification('Real-time API performance telemetry updated successfully!');
    setTimeout(() => setNotification(null), 3000);
  };

  const handleReset = () => {
    const res = resetLiveStats();
    setFormData(res);
    onStatsUpdated(res);
    setNotification('Telemetry metrics reset to tournament baseline.');
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#0E121A] border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-pulse" />
              <h3 className="text-xl font-bold font-heading text-white">
                Real-Time Telemetry API Simulator
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Simulate live player telemetry streaming via REST endpoint <code className="text-[#D4FF00]">GET /api/v1/athlete/stats</code>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="px-6 pt-4 flex items-center gap-2 border-b border-white/10 bg-black/20">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-xl transition-colors ${
              activeTab === 'editor'
                ? 'bg-white/10 text-[#D4FF00] border-b-2 border-[#D4FF00]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live Parameter Editor
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-xl transition-colors ${
              activeTab === 'json'
                ? 'bg-white/10 text-[#D4FF00] border-b-2 border-[#D4FF00]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Live JSON Payload
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-xl transition-colors ${
              activeTab === 'docs'
                ? 'bg-white/10 text-[#D4FF00] border-b-2 border-[#D4FF00]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            API Specifications
          </button>
        </div>

        {notification && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-[#D4FF00]/15 border border-[#D4FF00]/40 text-[#D4FF00] text-xs font-semibold flex items-center justify-between">
            <span>{notification}</span>
            <Check className="w-4 h-4" />
          </div>
        )}

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'editor' && (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Win Rate (%):
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    value={formData.winRate}
                    onChange={(e) => setFormData({ ...formData, winRate: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Matches Won / Total Matches:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={formData.matchesWon}
                      onChange={(e) => setFormData({ ...formData, matchesWon: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                      placeholder="Won"
                    />
                    <span className="text-slate-500">/</span>
                    <input
                      type="number"
                      value={formData.matchesPlayed}
                      onChange={(e) => setFormData({ ...formData, matchesPlayed: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                      placeholder="Played"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Third-Shot Drop Accuracy (%):
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.thirdShotDropPct}
                    onChange={(e) => setFormData({ ...formData, thirdShotDropPct: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Average Smash Velocity (km/h):
                  </label>
                  <input
                    type="number"
                    step="0.5"
                    value={formData.avgSmashSpeedKmh}
                    onChange={(e) => setFormData({ ...formData, avgSmashSpeedKmh: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Speed-Up Conversion (%):
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.speedUpConversionPct}
                    onChange={(e) => setFormData({ ...formData, speedUpConversionPct: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Dink Rally Endurance (%):
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.dinkRallyEndurancePct}
                    onChange={(e) => setFormData({ ...formData, dinkRallyEndurancePct: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Current Winning Streak:
                  </label>
                  <input
                    type="number"
                    value={formData.currentStreak}
                    onChange={(e) => setFormData({ ...formData, currentStreak: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-colors"
                >
                  Reset to Baseline
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#D4FF00] hover:bg-[#c2e800] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#D4FF00]/20"
                >
                  <Zap className="w-4 h-4 fill-black" />
                  <span>Transmit Real-Time Push</span>
                </button>
              </div>
            </form>
          )}

          {activeTab === 'json' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Response Status: 200 OK</span>
                <span className="font-mono text-[#D4FF00]">application/json</span>
              </div>
              <pre className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-lime-400 overflow-x-auto leading-relaxed">
                {JSON.stringify(stats, null, 2)}
              </pre>
            </div>
          )}

          {activeTab === 'docs' && (
            <div className="space-y-4 text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-emerald-400 block mb-1">GET /api/v1/athlete/stats</span>
                <p className="text-slate-400">Fetches current live telemetry for Muhammad Sulthan Rafy for partner widgets and broadcast overlays.</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-cyan-400 block mb-1">POST /api/v1/athlete/sync-match</span>
                <p className="text-slate-400">Webhook receiver for live match point tracking and tournament progression scores.</p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono font-bold text-amber-400 block mb-1">WebSocket: wss://live.ramsports.com/athlete/sulthanrafy</span>
                <p className="text-slate-400">Real-time socket channel broadcasting point-by-point telemetry during live tournament matches.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs text-slate-400">
          <span>Modifications immediately propagate across the web application.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
