import UserRepository from '../src/adapters/db/knex/userRepository';
import HashEncrypt from '../src/adapters/auth/HashEncrypt';
import RegisterUser from '../src/core/user/RegisterUser';

describe('Register User Use Case', () => {
  test('Deve registrar um usuário', async () => {
    const database = new UserRepository();
    const bcryptHashAdapter = new HashEncrypt();
    const createUseUseCase = new RegisterUser(database, bcryptHashAdapter);
    const user = await createUseUseCase.execute({
      name: `Eurico`,
      email: `${Math.random()}@mail.com`,
      password: '1234',
    });
    expect(user).toHaveProperty('email');
  });
});
