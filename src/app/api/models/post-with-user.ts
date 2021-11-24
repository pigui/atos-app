/* tslint:disable */
import { Comment } from './comment';
import { User } from './user';
export interface PostWithUser {
  body: string;
  comments: Array<Comment>;
  id: number;
  title: string;

  /**
   * own user
   */
  user: User;
}
