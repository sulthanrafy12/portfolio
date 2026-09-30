export interface AthleteProfile {
  name: string;
  age: number;
  country: string;
  tagline: string;
  discipline: string;
  pgid: string;
  duprId: string;
  activeSince: string;
  coachSince: string;
  duprSingles: number;
  duprDoubles: number;
  location: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  instagram: string;
  tiktok: string;
  paddleBrandCurrent: string;
  targetSponsor: string;
  summary: string;
}

export interface PerformanceStats {
  matchesPlayed: number;
  matchesWon: number;
  winRate: number;
  podiumsTotal: number;
  goldCount: number;
  silverCount: number;
  bronzeCount: number;
  thirdShotDropPct: number;
  speedUpConversionPct: number;
  dinkRallyEndurancePct: number;
  unforcedErrorsAvg: number;
  currentStreak: number;
  avgSmashSpeedKmh: number;
  tournamentsCompeted: number;
  lastSyncTime: string;
}

export interface TournamentRecord {
  id: string;
  title: string;
  achievement: string;
  tier: 'gold' | 'silver' | 'bronze';
  category: "Men's Singles" | "Men's Doubles" | "Open Championship";
  location: string;
  year: string;
  fileName: string;
  notes: string;
  statsHighlight?: string;
}

export interface MediaItem {
  fileName: string;
  title: string;
  category: 'profile' | 'action' | 'trophy' | 'gear' | 'social' | 'video';
  description: string;
  customUploadedUrl?: string;
  fallbackGradient?: string;
  highResStockFallback: string;
}

export interface SponsorshipTier {
  id: string;
  name: string;
  subtitle: string;
  recommended: boolean;
  investmentTier: string;
  features: string[];
  deliverables: string[];
  synergyHighlight: string;
}

export interface SocialStat {
  platform: 'Instagram' | 'TikTok' | 'YouTube';
  handle: string;
  followers: string;
  monthlyReach: string;
  engagementRate: string;
  primaryAudience: string;
  fileName: string;
}
