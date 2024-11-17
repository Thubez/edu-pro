export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'mentor' | 'admin';
  membership: {
    type: 'free' | 'monthly' | 'yearly';
    expiresAt: Date;
  };
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  mentorId: string;
  series: Series[];
  engagement: {
    views: number;
    totalWatchTime: number;
    completionRate: number;
  };
}

export interface Series {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: number;
  order: number;
}