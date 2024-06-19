import User from '@/core/User';
import DatabaseInterface from '../../../core/Bd';
import connection from './connection';

export default class UserRepository implements DatabaseInterface {
  async findByEmail(email: string): Promise<User | null> {
    const user = await connection('users').where({ email }).first();
    return user ?? null;
  }

  async insert(data: User): Promise<void> {
    await connection('users').insert({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }
}
