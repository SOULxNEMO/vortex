import { Product, StatusState, Announcement } from './types';
import { ShieldCheck, AlertTriangle, Hammer, XCircle, Activity } from 'lucide-react';

export const APP_NAME = "ACE X VORTEX";
export const DISCORD_LINK = "https://discord.gg/K6X79nHqRH"; // Your Discord link

// --- CONFIGURATION ---
// Edit this value to set a static key for everyone. 
// If you leave it empty (""), a random key for each user.
export const FREE_TRIAL_KEY = "F1LTHY-FREE";

export const PRODUCTS: Product[] = [
  {
    id: 'internal_panel',
    name: 'ACE X VORTEX INTERNAL PANEL',
    category: 'Panel',
    status: StatusState.UNDETECTED,
    lastUpdated: '1 hour ago',
    version: 'v2.4.0',
    downloadUrl: 'https://www.dropbox.com/scl/fi/vy2tk3tluji8sevy4mb5y/REAL-XITER.rar?dl=1',
    requirementUrl: 'https://mega.nz/file/7d9TXaxb#Bon-yyPkSpi7ZyXfstgkW3CfL287jlRCdPYm2M-w5DQ',
    recommendedEmulatorUrl: 'https://www.bluestacks.com/download.html',
    cleanEmulatorUrl: 'https://www.ldplayer.net/',
    description: 'The comprehensive internal solution. If you face Error 153, please check the requirements file and run as admin.',
    youtubeVideoId: 'KgGXx_bcuHM',
    features: [
      { name: "Aimbot Sight", status: 'SAFE' },
      { name: "Aimbot Rage", status: 'UNSAFE' },
      { name: "Aimbot Silent", status: 'UNSAFE' },
      { name: "Aimbot External", status: 'SAFE' },
      { name: "Avoid Fallen", status: 'SAFE' },
      { name: "Draw Fov", status: 'SAFE' },
      { name: "Mouse Aimbot", status: 'SAFE' },
      { name: "All Esp", status: 'SAFE' },
      { name: "All Chams", status: 'SAFE' },
      { name: "Steady Aim", status: 'SAFE' },
      { name: "Infinite Ammo", status: 'RISK' },
      { name: "Camera Hack", status: 'RISK' },
      { name: "AimLock", status: 'RISK' },
      { name: "Fast Switch", status: 'RISK' },
      { name: "Ultimate Fire", status: 'UNSAFE' },
      { name: "WallHack 1", status: 'UNSAFE' },
      { name: "WallHack 2", status: 'UNSAFE' },
      { name: "Fly To Roof", status: 'UNSAFE' },
      { name: "Standard Speed", status: 'UNSAFE' },
      { name: "Hyper Speed", status: 'UNSAFE' },
      { name: "Front Player", status: 'SAFE' },
      { name: "Side Player", status: 'SAFE' },
      { name: "Enemy Pull", status: 'RISK' },
      { name: "Teleport To Spawn", status: 'SAFE' },
      { name: "Teleport To Car", status: 'SAFE' },
      { name: "Up Player", status: 'SAFE' },
      { name: "Down Player", status: 'SAFE' },
    ],
    changelog: {
      title: '🚀 UPDATE — 14 NOV 2025',
      items: [
        'Added Enemy Pull (Risk Status)',
        'Added Fast Switch',
        'Added Hyper Speed',
        'Added Camera Hack',
        'Updated For OB51'
      ]
    },
    authorizedUsers: [
      { username: 'admin', password: 'key-123-internal' },
      { username: 'user_A', password: 'A1-key' }
    ]
  },
  {
    id: 'new_panel',
    name: 'ACE X VORTEX EXTERNAL PANEL',
    category: 'Panel',
    status: StatusState.UPDATING,
    lastUpdated: '3 hours ago',
    version: 'v1.0.5',
    downloadUrl: 'https://example.com/download',
    requirementUrl: 'https://example.com/drivers',
    recommendedEmulatorUrl: 'https://example.com/emulator',
    cleanEmulatorUrl: 'https://example.com/clean-emulator',
    description: 'The advanced external soqlution for ultimate performance and invisibility.',
    youtubeVideoId: 'dummy_video_id',
    features: [
      { name: "Vis Check", status: 'SAFE' },
      { name: "No Recoil", status: 'RISK' },
      { name: "Esp Distance", status: 'SAFE' },
      { name: "Skeleton Esp", status: 'SAFE' },
    ],
    changelog: {
      title: '🔥 HOTFIX — 15 NOV 2025',
      items: [
        'Fixed injection crash on Windows 11',
        'Optimized Vis Check performance',
        'Silent Aim accuracy improved'
      ]
    },
    authorizedUsers: [
      { username: 'user1', password: 'key-456-external' },
      { username: 'user_B', password: 'B2-key' }
    ]
  },
  {
    id: 'panel_3',
    name: 'ACE X VORTEX LITE PANEL',
    category: 'Panel',
    status: StatusState.UNDETECTED,
    lastUpdated: '5 hours ago',
    version: 'v0.9.8',
    description: 'Lightweight and fast panel focusing on core essentials.',
    youtubeVideoId: 'dummy_video_3',
    features: [
      { name: "Core Aimbot", status: 'SAFE' },
      { name: "Basic Esp", status: 'SAFE' },
    ],
    changelog: {
      title: '⚡ LITE UPDATE — 10 NOV 2025',
      items: [
        'Reduced CPU usage by 15%',
        'Improved menu responsiveness',
        'Added streamer mode safety features'
      ]
    }
  },
  {
    id: 'panel_4',
    name: 'ACE X VORTEX PRO PANEL',
    category: 'Panel',
    status: StatusState.TESTING,
    lastUpdated: '10 mins ago',
    version: 'v3.0.1',
    description: 'Professional grade panel with experimental features under testing.',
    youtubeVideoId: 'dummy_video_4',
    features: [
      { name: "Experimental Speed", status: 'RISK' },
      { name: "Invisible Hack", status: 'UNSAFE' },
    ],
    changelog: {
      title: '💎 PRO EXPERIMENTAL — 16 NOV 2025',
      items: [
        'New bypass module testing',
        'Reworked internal logic for faster execution',
        'Added debug overlay for beta testers'
      ]
    }
  },
  {
    id: 'panel_5',
    name: 'ACE X VORTEX MOBILE PANEL',
    category: 'Mobile',
    status: StatusState.UNDETECTED,
    lastUpdated: '2 hours ago',
    version: 'v1.2.0',
    description: 'Optimized internal panel for mobile emulators and native support.',
    youtubeVideoId: 'dummy_video_5',
    features: [
      { name: "Auto Shoot", status: 'SAFE' },
      { name: "Antiban", status: 'SAFE' },
    ],
    changelog: {
      title: '📱 MOBILE UPDATE — 12 NOV 2025',
      items: [
        'Improved BlueStacks 5 compatibility',
        'Fixed touch-aim jitter issues',
        'Updated safety signatures'
      ]
    }
  },
  {
    id: 'panel_6',
    name: 'ACE X VORTEX BYPASS PANEL',
    category: 'Panel',
    status: StatusState.UNDETECTED,
    lastUpdated: '1 day ago',
    version: 'v4.0.0',
    description: 'High-level kernel bypass for maximum security.',
    youtubeVideoId: 'dummy_video_6',
    features: [
      { name: "Kernel Driver", status: 'SAFE' },
      { name: "Hypervisor", status: 'SAFE' },
    ],
    changelog: {
      title: '🛡️ SECURITY PATCH — 13 NOV 2025',
      items: [
        'Updated kernel driver signature',
        'Enhanced hypervisor stealth matching',
        'Bypass logic refined for latest AC update'
      ]
    }
  },
  {
    id: 'panel_7',
    name: 'ACE X VORTEX ESP ONLY',
    category: 'Visuals',
    status: StatusState.UNDETECTED,
    lastUpdated: '4 hours ago',
    version: 'v1.1.1',
    description: 'Dedicated visual-only panel for streamers and closet players.',
    youtubeVideoId: 'dummy_video_7',
    features: [
      { name: "Custom Esp", status: 'SAFE' },
      { name: "Box Esp", status: 'SAFE' },
    ],
    changelog: {
      title: '🎨 VISUALS UPDATE — 14 NOV 2025',
      items: [
        'Added custom RGB color picker for ESP',
        'Improved skeleton rendering smoothness',
        'Fixed ESP flicker in full-screen mode'
      ]
    }
  },
  {
    id: 'panel_8',
    name: 'ACE X VORTEX AIM PANEL',
    category: 'Combat',
    status: StatusState.DETECTED,
    lastUpdated: '12 hours ago',
    version: 'v2.2.0',
    description: 'Focused combat panel. Currently undergoing maintenance.',
    youtubeVideoId: 'dummy_video_8',
    features: [
      { name: "Rage Bot", status: 'UNSAFE' },
      { name: "Silent Aim", status: 'UNSAFE' },
    ],
    changelog: {
      title: '🛠️ MAINTENANCE — 16 NOV 2025',
      items: [
        'Detecting current ban vectors',
        'Developing new prediction algorithms',
        'Wait for status to return to UNDETECTED'
      ]
    }
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'ann_error_153_fix',
    title: '⚠️ Fix for Error 153',
    date: '15 Nov 2025',
    content: '• Download and install all "Requirement file" drivers\n• Turn off Antivirus / Windows Defender\n• Right click and "Run as Administrator"',
    type: 'warning'
  },
  {
    id: 'ann_update_1',
    title: '🚀 Update — 14 Nov 2025',
    date: '14 Nov 2025',
    content: '• Added Enemy Pull (Risk Status)\n• Added Fast Switch\n• Added Hyper Speed\n• Added Camera Hack\n• Updated For OB51',
    type: 'success'
  }
];

export const STATUS_CONFIG = {
  [StatusState.UNDETECTED]: {
    color: 'text-brand-500',
    bgColor: 'bg-brand-500/10',
    borderColor: 'border-brand-500/20',
    icon: ShieldCheck,
    label: 'Undetected'
  },
  [StatusState.DETECTED]: {
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    icon: XCircle,
    label: 'Detected'
  },
  [StatusState.UPDATING]: {
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    icon: Hammer,
    label: 'Updating'
  },
  [StatusState.TESTING]: {
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400/20',
    icon: Activity,
    label: 'Testing'
  },
  [StatusState.OFFLINE]: {
    color: 'text-zinc-500',
    bgColor: 'bg-zinc-500/10',
    borderColor: 'border-zinc-500/20',
    icon: AlertTriangle,
    label: 'Offline'
  }
};