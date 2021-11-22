/* tslint:disable */
import { User } from './user';
export interface PostWithUser {
  body: string;
  id: number;
  title: string;
  user: User;
}
