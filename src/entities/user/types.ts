export type UserStatus = 'online' | 'offline';

export interface IUser {
  image: string;
  name: string;
  status: UserStatus;
}
