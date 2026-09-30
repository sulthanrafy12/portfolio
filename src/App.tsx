/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsDashboard } from './components/StatsDashboard';
import { TournamentsVault } from './components/TournamentsVault';
import { RamsportSynergy } from './components/RamsportSynergy';
import { VideoReel } from './components/VideoReel';
import { MediaGallery } from './components/MediaGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MediaManagerModal } from './components/MediaManagerModal';
import { ApiSimulatorModal } from './components/ApiSimulatorModal';
import { ProposalDeckModal } from './components/ProposalDeckModal';
import { INITIAL_ATHLETE_PROFILE } from './data/athleteData';
import { getLiveStats, simulateRealtimeSync } from './services/statsApi';
import { PerformanceStats } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [stats, setStats] = useState<PerformanceStats>(() => getLiveStats());
  const [isApiLive, setIsApiLive] = useState<boolean>(true);
  const [mediaModalOpen, setMediaModalOpen] = useState<boolean>(false);
  const [apiModalOpen, setApiModalOpen] = useState<boolean>(false);
  const [deckModalOpen, setDeckModalOpen] = useState<boolean>(false);
  const [, setMediaVersion] = useState<number>(0);

  // Sync dark class on root html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Periodic simulated live API updates when isApiLive is true
  useEffect(() => {
    if (!isApiLive) return;

    const interval = setInterval(() => {
      const updated = simulateRealtimeSync();
      setStats(updated);
    }, 15000); // Pulse every 15s

    return () => clearInterval(interval);
  }, [isApiLive]);

  // Listen for custom events
  useEffect(() => {
    const handleMediaUpdated = () => {
      setMediaVersion((v) => v + 1);
    };

    const handleStatsUpdated = (e: Event) => {
      const customEvent = e as CustomEvent<PerformanceStats>;
      if (customEvent.detail) {
        setStats(customEvent.detail);
      }
    };

    window.addEventListener('media-updated', handleMediaUpdated);
    window.addEventListener('stats-api-updated', handleStatsUpdated);

    return () => {
      window.removeEventListener('media-updated', handleMediaUpdated);
      window.removeEventListener('stats-api-updated', handleStatsUpdated);
    };
  }, []);

  const handleRefreshApi = () => {
    const updated = simulateRealtimeSync();
    setStats(updated);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0B0E14] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        onOpenMediaModal={() => setMediaModalOpen(true)}
        onOpenApiModal={() => setApiModalOpen(true)}
        isApiLive={isApiLive}
        onToggleApiLive={() => setIsApiLive(!isApiLive)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          profile={INITIAL_ATHLETE_PROFILE}
          stats={stats}
          onOpenDeckModal={() => setDeckModalOpen(true)}
          onOpenMediaModal={() => setMediaModalOpen(true)}
        />

        {/* Real-Time Performance Stats Dashboard */}
        <StatsDashboard
          stats={stats}
          profile={INITIAL_ATHLETE_PROFILE}
          isApiLive={isApiLive}
          onToggleApiLive={() => setIsApiLive(!isApiLive)}
          onRefreshApi={handleRefreshApi}
          onOpenApiModal={() => setApiModalOpen(true)}
        />

        {/* Tournament Podium Records (7 Verified Tournaments) */}
        <TournamentsVault
          onOpenMediaModal={() => setMediaModalOpen(true)}
        />

        {/* Ramsports Synergy & Equipment Transition */}
        <RamsportSynergy
          onOpenDeckModal={() => setDeckModalOpen(true)}
          onOpenMediaModal={() => setMediaModalOpen(true)}
        />

        {/* Video Highlights Reel (videosatu.mp4) */}
        <VideoReel
          onOpenMediaModal={() => setMediaModalOpen(true)}
        />

        {/* Media Gallery (All 15 Authentic Files & Social Reach) */}
        <MediaGallery
          onOpenMediaModal={() => setMediaModalOpen(true)}
        />

        {/* Instant Contact & Partnership Form */}
        <ContactSection
          onOpenDeckModal={() => setDeckModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <MediaManagerModal
        isOpen={mediaModalOpen}
        onClose={() => setMediaModalOpen(false)}
        onMediaChanged={() => setMediaVersion((v) => v + 1)}
      />

      <ApiSimulatorModal
        isOpen={apiModalOpen}
        onClose={() => setApiModalOpen(false)}
        stats={stats}
        onStatsUpdated={(newStats) => setStats(newStats)}
      />

      <ProposalDeckModal
        isOpen={deckModalOpen}
        onClose={() => setDeckModalOpen(false)}
        stats={stats}
      />

    </div>
  );
}
