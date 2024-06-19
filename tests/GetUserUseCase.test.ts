import connection from '../src/adapters/db/knex/connection';
import UserRepository from '../src/adapters/db/knex/userRepository';
import GetUserUseCase from '../src/core/user/GetUser';

describe('GetUserUseCase', () => {
  let email = `${Math.random()}@mail.com`;
  afterAll(async () => {
    await connection('users').where({ email }).delete();
  });

  test('Deve buscar um usuário', async () => {
    const database = new UserRepository();
    const getUserUseCase = new GetUserUseCase(database);

    await database.insert({
      email,
      name: 'Any_name',
      password: 'any_password',
    });
    const user = await getUserUseCase.execute(email);
    expect(user).toBeDefined();
    expect(user?.email).toEqual(email);
  });
});
