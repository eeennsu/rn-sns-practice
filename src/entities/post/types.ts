import { IUser } from '@entities/user/types';

export interface IPost {
  id: string;
  title: string;
  author: IUser;
  image: string;
  likeCount: number;
  commentCount: number;
  sharedCount: number;
  createdAt: string;
}
