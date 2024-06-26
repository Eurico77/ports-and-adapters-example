import Id from '../shared/Id';
import UseCase from '../shared/UseCase';
import User from '../user/User';
import DbProvider from './Bd';
import Transaction from './Transaction';

export default class SaveTransaction implements UseCase<Input, void> {
  constructor(private readonly repo: DbProvider) {}

  async execute(input: Input): Promise<void> {
    const transaction = {
      ...input.transaction,
      id: input.id ?? Id.generate(),
      user_id: input.user.id,
    };
    input.id
      ? await this.repo.update(transaction)
      : await this.repo.add(transaction);
  }
}

export type Input = {
  id?: string;
  transaction: Transaction;
  user: User;
};
