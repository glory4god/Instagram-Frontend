export type UserData = {
  id: string;
  board: number;
  follower: number;
  following: number;
  introduce: string;
  imageUrl: string;
};

export type Banner = 'main' | 'saved' | 'channel' | 'tagged';
