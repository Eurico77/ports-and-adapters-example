import { randomUUID } from 'node:crypto';
import { DatabaseInterface } from '../ports/Bd';
import EncryptHash from '../ports/Encrypt';

export default class RegisterUser {
  constructor(private repo: DatabaseInterface, readonly encrypt: EncryptHash) {}

  execute(name: string, email: string, pass: string) {
    const user = {
      id: randomUUID(),
      name,
      email,
      pass: this.encrypt.hash(pass),
    };
    this.repo.insert(user);
    return user;
  }
}
