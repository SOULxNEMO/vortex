export enum StatusState {
  UNDETECTED = 'UNDETECTED',
  DETECTED = 'DETECTED',
  UPDATING = 'UPDATING',
  TESTING = 'TESTING',
  OFFLINE = 'OFFLINE'
}

export interface Feature {
  name: string;
  status: 'SAFE' | 'RISK' | 'UNSAFE';
}

export interface Changelog {
  title: string;
  items: string[];
}

export interface Product {
  id: string;
  name: string;
  category: 'Panel' | 'Feature' | 'Utility' | 'Mobile' | 'Visuals' | 'Combat' | 'Other';
  status: StatusState;
  lastUpdated: string;
  version: string;
  downloadUrl?: string;
  requirementUrl?: string;
  recommendedEmulatorUrl?: string;
  cleanEmulatorUrl?: string;
  description?: string;
  youtubeVideoId?: string;
  features?: Feature[];
  changelog?: Changelog;
  authorizedUsers?: {
    username: string;
    password: string;
  }[];
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  type: 'info' | 'warning' | 'success';
}