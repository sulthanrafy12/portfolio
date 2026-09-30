import { AthleteProfile, PerformanceStats, TournamentRecord, MediaItem, SponsorshipTier, SocialStat } from '../types';

export const INITIAL_ATHLETE_PROFILE: AthleteProfile = {
  name: 'M. Sulthan Rafy',
  age: 23,
  country: 'Indonesia',
  tagline: 'Competitive Pickleball Athlete & Coach | PGID: 95180 · DUPR: DWR9LX',
  discipline: "Competitive Pickleball (Men's Singles & Men's Doubles)",
  pgid: '95180',
  duprId: 'DWR9LX',
  activeSince: '2022',
  coachSince: '2024',
  duprSingles: 4.98,
  duprDoubles: 5.14,
  location: 'Bekasi, Indonesia',
  email: 'ravysultan9@gmail.com',
  phone: '+62 896-8735-2370',
  whatsappNumber: '6289687352370',
  instagram: '@vyravy_',
  tiktok: '@pickleballindo',
  paddleBrandCurrent: 'Ramsports Typhoon 16mm (USA Pickleball Approved)',
  targetSponsor: 'Ramsports | Global Pickleball Brand',
  summary: '23-year-old competitive Pickleball athlete and coach based in Bekasi, Indonesia. Active in competitive circuits since 2022 and certified coach since 2024 (PGID: 95180 | DUPR: DWR9LX). Proven champion with Gold Medals at Kadispora Cup (Singles & Doubles), Silver Medals at UNJ & ITB Open, and Bronze at Universitas Indonesia Open.',
};

export const INITIAL_PERFORMANCE_STATS: PerformanceStats = {
  matchesPlayed: 52,
  matchesWon: 44,
  winRate: 84.6,
  podiumsTotal: 7,
  goldCount: 2,
  silverCount: 3,
  bronzeCount: 2,
  thirdShotDropPct: 88.4,
  speedUpConversionPct: 91.2,
  dinkRallyEndurancePct: 94.0,
  unforcedErrorsAvg: 3.4,
  currentStreak: 6,
  avgSmashSpeedKmh: 98.5,
  tournamentsCompeted: 9,
  lastSyncTime: '2026-09-30 09:15:20 WIB',
};

export const TOURNAMENT_RECORDS: TournamentRecord[] = [
  {
    id: 't-1',
    title: 'Kadispora Cup DKI Jakarta - Men\'s Singles',
    achievement: '1st Place Champion (Gold)',
    tier: 'gold',
    category: "Men's Singles",
    location: 'JasaMarga Tennis Arena, East Jakarta',
    year: '2022',
    fileName: 'sertifjuara1kadispora.jpeg',
    notes: 'Official Champion Certificate awarded to M. Sulthan Rafy. Undefeated run throughout group stages to the final title.',
    statsHighlight: 'Unbeaten streak (6-0), dominant groundstrokes & passing shots'
  },
  {
    id: 't-2',
    title: 'Kadispora Cup DKI Jakarta - Men\'s Doubles',
    achievement: '1st Place Champion (Gold)',
    tier: 'gold',
    category: "Men's Doubles",
    location: 'JasaMarga Tennis Arena, East Jakarta',
    year: '2022',
    fileName: 'juara2mensdoublekadispora.jpg',
    notes: 'Official 1st Place Certificate awarded to M. Sulthan Rafy. Clean sweep victory in Men\'s Doubles student championship.',
    statsHighlight: '92% kitchen firefight conversion, rock-solid tandem defense'
  },
  {
    id: 't-3',
    title: 'Jakarta Pickleball Championship - Day of the Seafarer',
    achievement: '1st Runner-Up / 2nd Place (Silver)',
    tier: 'silver',
    category: "Men's Doubles",
    location: 'Jakarta Metropolitan Arena',
    year: '2023/2024',
    fileName: 'juara2jakartapickleballchampionship.jpeg',
    notes: '2nd Place winner in Men\'s Doubles Open division with official prize plaque and podium honors.',
    statsHighlight: 'Epic semifinal tiebreak clutch 12-10, fast-hands dinking exchange'
  },
  {
    id: 't-4',
    title: 'Universitas Negeri Jakarta (UNJ) Championship',
    achievement: '1st Runner-Up / 2nd Place (Silver)',
    tier: 'silver',
    category: "Men's Doubles",
    location: 'Campus B, State University of Jakarta (UNJ)',
    year: '2022',
    fileName: 'juara2menssingleunj.jpg',
    notes: 'Official National Certificate awarded to M. Sulthan Rafy. Top collegiate & junior championship podium finish.',
    statsHighlight: 'Third-shot drop consistency at 91%, deep offensive drives'
  },
  {
    id: 't-5',
    title: 'Institut Teknologi Bandung (ITB) Open',
    achievement: '1st Runner-Up / 2nd Place (Silver)',
    tier: 'silver',
    category: "Men's Doubles",
    location: 'Bandung Institute of Technology (ITB)',
    year: '2023',
    fileName: 'juara2mensdoubleitb.jpg',
    notes: 'Podium silver finish in collegiate & open Men\'s Doubles bracket awarded to M. Sulthan Rafy.',
    statsHighlight: '85% dink rally endurance, aggressive speed-up counters'
  },
  {
    id: 't-6',
    title: 'SA-UI Cup Universitas Indonesia & 1st Jakarta Championship',
    achievement: '2nd Runner-Up / 3rd Place (Bronze)',
    tier: 'bronze',
    category: "Men's Doubles",
    location: 'Pickleball Center Universitas Indonesia, Depok',
    year: '2024',
    fileName: 'juara3mensdoubleUI.jpg',
    notes: 'Official certificate awarded to Muhammad Sulthan Rafy in Men\'s Doubles Open division.',
    statsHighlight: 'Clutch medal match victory with 88% volley attack accuracy'
  },
  {
    id: 't-7',
    title: 'Jalak Bodas West Java & DKI Jakarta Community Championship',
    achievement: '2nd Runner-Up / 3rd Place (Bronze)',
    tier: 'bronze',
    category: "Open Championship",
    location: 'Jalak Bodas Stadium / Universitas Bani Saleh',
    year: '2025',
    fileName: 'juara3jabodetabek.jpeg',
    notes: 'Bronze medal finish and official trophy representing Universitas Bani Saleh at the 4th Anniversary Championship.',
    statsHighlight: 'Strong court coverage and decisive counter-smash combinations'
  }
];

export const MEDIA_COLLECTION: MediaItem[] = [
  {
    fileName: 'fotoprofil.jpg',
    title: 'Official Athlete In-Game Portrait',
    category: 'profile',
    description: 'Muhammad Sulthan Rafy in match action at Jorta Arena Court 04, showcasing focused stance and tactical precision.',
    highResStockFallback: '/assets/fotoprofil.jpg',
    fallbackGradient: 'from-zinc-900 to-black'
  },
  {
    fileName: 'foto in game.jpg',
    title: 'Airborne Volley & Dynamic Court Action',
    category: 'action',
    description: 'High-speed explosive overhead volley captured live during competitive tournament play.',
    highResStockFallback: '/assets/foto in game.jpg',
    fallbackGradient: 'from-amber-950 to-zinc-950'
  },
  {
    fileName: 'fotomenggunakanmedali.jpg',
    title: 'Podium Victory Ceremony',
    category: 'trophy',
    description: 'Celebrating 2nd Place medal ceremony with official certificate and partner at Jakarta Pickleball Championship.',
    highResStockFallback: '/assets/fotomenggunakanmedali.jpg',
    fallbackGradient: 'from-yellow-950 to-zinc-900'
  },
  {
    fileName: 'fotobeberapamedali.jpg',
    title: 'Medal Collection & Trophy Cabinet',
    category: 'trophy',
    description: 'Authentic rack of championship medals across regional, collegiate, and national pickleball tournaments.',
    highResStockFallback: '/assets/fotobeberapamedali.jpg',
    fallbackGradient: 'from-neutral-900 to-black'
  },
  {
    fileName: 'fotopaddlekamito.png',
    title: 'Ramsports Typhoon 16mm Pro Setup',
    category: 'gear',
    description: 'Official Ramsports Typhoon 16mm USA Pickleball Approved paddle setup, optimized for control and explosive pop.',
    highResStockFallback: '/assets/fotopaddlekamito.png',
    fallbackGradient: 'from-purple-950 to-neutral-900'
  },
  {
    fileName: 'sertifjuara1kadispora.jpeg',
    title: 'Kadispora Cup 1st Place Singles Certificate',
    category: 'trophy',
    description: 'Official 1st Place Men\'s Singles Champion certificate awarded to M. Sulthan Rafy by Kadispora DKI Jakarta.',
    highResStockFallback: '/assets/sertifjuara1kadispora.jpeg',
    fallbackGradient: 'from-amber-900 to-black'
  },
  {
    fileName: 'juara2jakartapickleballchampionship.jpeg',
    title: 'Jakarta Pickleball Championship Award Banner',
    category: 'trophy',
    description: 'Official 2nd Place Men\'s Doubles Open award banner from Day of the Seafarer Championship.',
    highResStockFallback: '/assets/juara2jakartapickleballchampionship.jpeg',
    fallbackGradient: 'from-slate-900 to-zinc-900'
  },
  {
    fileName: 'juara2mensdoublekadispora.jpg',
    title: 'Kadispora Cup 1st Place Doubles Certificate',
    category: 'trophy',
    description: 'Official 1st Place Men\'s Doubles Champion certificate awarded to M. Sulthan Rafy.',
    highResStockFallback: '/assets/juara2mensdoublekadispora.jpg',
    fallbackGradient: 'from-zinc-900 to-neutral-950'
  },
  {
    fileName: 'juara2menssingleunj.jpg',
    title: 'UNJ National Championship Singles Certificate',
    category: 'trophy',
    description: 'Official 2nd Place Men\'s Singles U-18 National Championship certificate awarded to M. Sulthan Rafy.',
    highResStockFallback: '/assets/juara2menssingleunj.jpg',
    fallbackGradient: 'from-emerald-950 to-neutral-900'
  },
  {
    fileName: 'juara3mensdoubleUI.jpg',
    title: 'SA-UI Cup Universitas Indonesia Certificate',
    category: 'trophy',
    description: 'Official 3rd Place Men\'s Doubles Open certificate awarded to Muhammad Sulthan Rafy at UI Pickleball Center.',
    highResStockFallback: '/assets/juara3mensdoubleUI.jpg',
    fallbackGradient: 'from-yellow-950 to-stone-900'
  },
  {
    fileName: 'juara3jabodetabek.jpeg',
    title: 'Jalak Bodas Championship Trophy & Plaque',
    category: 'trophy',
    description: 'Muhammad Sulthan Rafy displaying the 3rd place trophy and medal for Universitas Bani Saleh.',
    highResStockFallback: '/assets/juara3jabodetabek.jpeg',
    fallbackGradient: 'from-amber-950 to-neutral-900'
  },
  {
    fileName: 'juara2mensdoubleitb.jpg',
    title: 'ITB Open Men\'s Doubles Podium Documentation',
    category: 'trophy',
    description: '2nd Place silver finish in Men\'s Doubles at Bandung Institute of Technology (ITB).',
    highResStockFallback: '/assets/juara2mensdoubleitb.jpg',
    fallbackGradient: 'from-blue-950 to-neutral-900'
  },
  {
    fileName: 'my instagram.png',
    title: 'Instagram Reach & Profile (@vyravy_)',
    category: 'social',
    description: 'Verified athlete Instagram profile with 1,315+ followers, 50+ tournament credits, and high pickleball community reach.',
    highResStockFallback: '/assets/my instagram.png',
    fallbackGradient: 'from-fuchsia-950 to-purple-950'
  },
  {
    fileName: 'mytiktok.png',
    title: 'TikTok Viral Reels & Paddle Reviews (@pickleballindo)',
    category: 'social',
    description: 'Bekasi-based pickleball content creator account with 6,120+ likes, viral paddle playtests, and 17.2K+ view peaks.',
    highResStockFallback: '/assets/mytiktok.png',
    fallbackGradient: 'from-cyan-950 to-slate-900'
  },
  {
    fileName: 'videosatu.mp4',
    title: 'Tournament Gameplay Reel & Fast Kitchen Duel',
    category: 'video',
    description: 'High-intensity match highlight video showcasing unforced error discipline, ATP drops, and quick volley resets.',
    highResStockFallback: '/assets/videosatu.mp4',
    fallbackGradient: 'from-zinc-900 via-neutral-900 to-black'
  }
];

export const SOCIAL_STATS: SocialStat[] = [
  {
    platform: 'Instagram',
    handle: '@vyravy_',
    followers: '1,315+',
    monthlyReach: '42.5K+',
    engagementRate: '8.4%',
    primaryAudience: 'Pickleball Players, Tournament Competitors, 18-35 yo',
    fileName: 'my instagram.png'
  },
  {
    platform: 'TikTok',
    handle: '@pickleballindo',
    followers: '300+ / 6.1K Likes',
    monthlyReach: '65.0K+ Views',
    engagementRate: '12.8%',
    primaryAudience: 'Active Racquet Sport Players, Gear Buyers, Bekasi & Jakarta',
    fileName: 'mytiktok.png'
  }
];

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    id: 'tier-gear',
    name: 'Official Equipment & Paddle Partner',
    subtitle: 'Entry Synergy Tier',
    recommended: false,
    investmentTier: 'Gear & Apparel Support',
    synergyHighlight: 'Exclusive on-court play with Ramsports paddles (Typhoon Pro Series) across all tournament circuits.',
    features: [
      'Official allocation of 3-4 Ramsports Pro Paddles (Typhoon / Raw Carbon series)',
      'Tournament match accessories (Ramsports grips, balls, paddle cover, overgrips)',
      'Competition apparel & kit featuring high-visibility Ramsports branding',
      'Direct player feedback and prototype testing for future product lines'
    ],
    deliverables: [
      'Dedicated tag @ramsportspickleball in every training & match social post',
      'Monthly paddle review and playtest reel on TikTok (@pickleballindo) & IG',
      'Ramsports logo showcased on player match bag and paddle sleeve'
    ]
  },
  {
    id: 'tier-pro',
    name: 'Tournament & Travel Title Partner',
    subtitle: 'Most Recommended Partnership',
    recommended: true,
    investmentTier: 'Tournament Entry Support + Monthly Retainer',
    synergyHighlight: 'Direct brand exposure across all regional and national podium appearances in Indonesia.',
    features: [
      'All benefits from Official Equipment Partner',
      'Tournament registration and travel sponsorship across 8-12 regional/national events',
      'Custom branded Ramsports competition jersey with prime chest and arm patches',
      'Podium representation and post-match interview brand mentions'
    ],
    deliverables: [
      'Minimum 2 dedicated monthly video reviews and unboxing playtests',
      'Podium photos with Ramsports paddle and jersey uploaded to all channels',
      'Right for Ramsports to use player footage and photos in commercial marketing',
      'Promotional discounts and referral link integration for local followers'
    ]
  },
  {
    id: 'tier-ambassador',
    name: 'Signature Brand Ambassador',
    subtitle: 'Strategic Brand Synergy',
    recommended: false,
    investmentTier: 'Annual Full Endorsement & Co-Branding',
    synergyHighlight: 'Long-term strategic partnership to capture the rapidly booming Indonesian pickleball market.',
    features: [
      'All benefits from Tournament Title Partner',
      'Opportunity for Signature Edition Paddle collaboration (M. Sulthan Rafy x Ramsports Pro)',
      'Coaching clinics and community exhibition matches hosted in Bekasi and Greater Jakarta',
      'Exclusive brand representative at national sports expos and demo days'
    ],
    deliverables: [
      '100% brand exclusivity in the racquet sports category',
      '4 premium monthly content productions (Reels, TikTok, YouTube Shorts)',
      'Brand appearances at Ramsports product launches and store activations',
      'Continuous community advocacy driving sales across Indonesian pickleball clubs'
    ]
  }
];

export const RAMSPORTS_BRAND_INFO = {
  name: 'Ramsports',
  tagline: 'Global Pickleball Brand',
  slogan: 'Trusted by Pros. Built to Compete.',
  bio: 'Pickleball Paddles & Gear. Trusted by Pros. Built to compete. Free Shipping $50+ USCA.',
  website: 'ramsports.com',
  instagram: '@ramsportspickleball',
  accentColor: '#D4FF00',
  secondaryColor: '#0B0E14'
};
