import UseCase from '../shared/UseCase';
import DatabaseInterface from './Bd';
import EncryptHash from './Encrypt';
import TokenProvider from './TokenProvider';
import User from './User';

export default class UserLogin implements UseCase<Input, Output> {
  constructor(
    readonly repo: DatabaseInterface,
    readonly encrypt: EncryptHash,
    readonly tokenProvider: TokenProvider
  ) {}

  async execute(input: Input): Promise<Output> {
    const userExists = await this.repo.findByEmail(input.email);
    if (!userExists) throw new Error('User does not exists!');
    const passwordMatch = this.encrypt.compare(
      input.password,
      userExists.password!
    );
    if (!passwordMatch) throw new Error('Invalid credentials');
    const token = this.tokenProvider.sign({ email: input.email });
    const user = {
      ...userExists,
      password: undefined,
    };
    return {
      user,
      token,
    };
  }
}

type Input = {
  email: string;
  password: string;
};

type Output = {
  user: User;
  token: string;
};
