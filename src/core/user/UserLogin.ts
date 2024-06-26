import DatabaseInterface from './Bd';
import EncryptHash from './Encrypt';
import User from './User';

export default class UserLogin {
  constructor(
    readonly repo: DatabaseInterface,
    readonly encrypt: EncryptHash,
    readonly jsonWebToken: any
  ) {}

  async execute(email: string, password: string) {
    const userExists = await this.repo.findByEmail(email);
    if (!userExists) throw new Error('User does not exists!');
    const passwordMatch = this.encrypt.compare(password, userExists.password!);
    if (!passwordMatch) throw new Error('Invalid credentials');
  }
}
