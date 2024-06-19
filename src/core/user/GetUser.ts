import DatabaseInterface from '../Bd';
import User from '../User';

export default class GetUserUseCase {
  constructor(readonly repo: DatabaseInterface) {}

  async execute(email: string): Promise<User | null> {
    const user = await this.repo.findByEmail(email);
    return user;
  }
}
