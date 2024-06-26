import DatabaseInterface from './Bd';
import EncryptHash from './Encrypt';
import User from './User';

export default class RegisterUser {
  constructor(
    readonly repo: DatabaseInterface,
    readonly encrypt: EncryptHash
  ) {}

  async execute(userData: User): Promise<Partial<User>> {
    const user = {
      name: userData.name,
      email: userData.email,
      password: this.encrypt.hash(userData.password!),
    };
    const userExists = await this.repo.findByEmail(userData.email);
    if (userExists) throw new Error('User already exists');
    await this.repo.insert(user);
    return user;
  }
}
