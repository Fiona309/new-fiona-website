export interface Project {
  id: string;
  title: string;
  tags: string[];
  award?: string;
  description: string;
  details?: { label: string; value: string }[];
  link?: string;
  linkText: string;
  imageAlt: string;
  imageUrl?: string;
  videoUrl?: string;
  localVideoUrl?: string; // 本地视频文件（用 <video> 播放）
  images?: string[]; // 多张图片用于轮播
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievement: string;
  highlight: string;
  details?: {
    projects?: {
      title: string;
      background?: string;
      analysis?: string;
      strategy?: string;
      results?: string;
      items?: { label: string; value: string }[]; // 自定义小标题条目
    }[];
    responsibilities?: string[];
  };
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  metric: string;
  description: string;
  placeholderType: 'IMAGE' | 'VIDEO' | 'AUDIO';
  imageUrl?: string;
  videoUrl?: string;
  audioUrl?: string;
  embedUrl?: string;
  externalLink?: string;
  articleLinks?: { title: string; url: string }[];
}

export interface ThoughtBubble {
  id: string;
  keyword: string;
  content: string;
  size: 'sm' | 'md' | 'lg';
  position: string; // Tailwind class for positioning
  delay: string; // Animation delay
}