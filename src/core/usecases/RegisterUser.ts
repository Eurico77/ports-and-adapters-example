import { randomUUID } from 'node:crypto';
import { DatabaseInterface } from '../ports/Bd';
import EncryptHash from '../ports/Encrypt';
import User from '../domain/User';

export default class RegisterUser {
  constructor(
    readonly repo: DatabaseInterface,
    readonly encrypt: EncryptHash
  ) {}

  async execute(name: string, email: string, password: string): Promise<User> {
    const user = {
      id: randomUUID(),
      name,
      email,
      password: this.encrypt.hash(password),
    };
    await this.repo.insert(user);
    return user;
  }
}
