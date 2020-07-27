export interface EpisodeData {
  id: number;
  date: string;
  title: string;
  description: string;
  url: string;
  guests: Guest[];
}

interface Guest {
  name: string;
  twitter: string;
}

// interface Episodes: Array<Episode>
