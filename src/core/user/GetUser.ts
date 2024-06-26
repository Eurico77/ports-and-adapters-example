import UseCase from '../shared/UseCase';
import DatabaseInterface from './Bd';
import User from './User';

export default class GetUserUseCase implements UseCase<Input, User> {
  constructor(readonly repo: DatabaseInterface) {}

  async execute(input: Input): Promise<User> {
    const user = await this.repo.findByEmail(input.email);
    if (!user) throw new Error();
    return user;
  }
}

type Input = {
  email: string;
};
