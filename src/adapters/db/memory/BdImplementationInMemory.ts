import User from '@/core/user/User';
import DatabaseInterface from '@/core/Bd';

export default class Database implements DatabaseInterface {
  private static items: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = Database.items.find((user) => user.email === email);
    return user ?? null;
  }

  async insert(data: User): Promise<void> {
    Database.items.push(data);
  }
}
