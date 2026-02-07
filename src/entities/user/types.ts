export type UserStatus = 'online' | 'offline';

export interface IUser {
  id: string;
  image: string;
  name: string;
  status: UserStatus;
}
