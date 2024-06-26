import User from './User';

export default interface DatabaseInterface {
  insert(data: User): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}
