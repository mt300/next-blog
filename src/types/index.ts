export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  website: string;
}