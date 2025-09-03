export type Profile = {
  id?: string | number;
  avatar?: string;
  name?: string;
  time?: string;
};

export interface BlogType {
  id?: string;
  profile?: Profile;
  time?: Date;
  comment?: string;
  replies?: any[];
}

export interface BlogPostType {
  id?: number|any;
  title?: any;
  content?: string |any;
  coverImg?: string |any;
  createdAt?: Date;
  view?: number;
  share?: number;
  category?: string |any;
  featured?: boolean;
  author?: Profile | any;
  comments?: any[];
}


