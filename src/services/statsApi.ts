import { PerformanceStats } from '../types';
import { INITIAL_PERFORMANCE_STATS } from '../data/athleteData';

const API_STORAGE_KEY = 'ramsports_athlete_stats';

// Load stats from local cache or initial
export function getLiveStats(): PerformanceStats {
  try {
    const cached = localStorage.getItem(API_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (err) {
    console.warn('Failed to parse cached stats', err);
  }
  return { ...INITIAL_PERFORMANCE_STATS };
}

// Save stats
export function saveLiveStats(stats: PerformanceStats): void {
  try {
    localStorage.setItem(API_STORAGE_KEY, JSON.stringify(stats));
    window.dispatchEvent(new CustomEvent('stats-api-updated', { detail: stats }));
  } catch (err) {
    console.error('Failed to save stats', err);
  }
}

// Reset stats to baseline
export function resetLiveStats(): PerformanceStats {
  try {
    localStorage.removeItem(API_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('stats-api-updated', { detail: INITIAL_PERFORMANCE_STATS }));
  } catch (err) {
    console.error(err);
  }
  return { ...INITIAL_PERFORMANCE_STATS };
}

// Simulate an API webhook / push event with randomized slight variance (real-time simulation)
export function simulateRealtimeSync(): PerformanceStats {
  const current = getLiveStats();
  const now = new Date();
  const timeStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')} WIB`;

  // slight subtle variation in rally endurance or smash speed to show live ping
  const randomDrop = +(87 + Math.random() * 3).toFixed(1);
  const randomSpeed = +(96 + Math.random() * 5).toFixed(1);

  const updated: PerformanceStats = {
    ...current,
    thirdShotDropPct: randomDrop,
    avgSmashSpeedKmh: randomSpeed,
    lastSyncTime: timeStr
  };

  saveLiveStats(updated);
  return updated;
}
