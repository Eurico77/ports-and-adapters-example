import User from '../src/core/User';
import UserRepository from '../src/adapters/db/knex/userRepository';
import HashEncrypt from '../src/adapters/auth/HashEncrypt';
import DatabaseInterface from '../src/core/Bd';
import RegisterUser from '../src/core/RegisterUser';

describe('Register User Use Case', () => {
  test('Deve registrar um usuário', async () => {
    // const database: DatabaseInterface = {
    //   async insert(data: User) {
    //     const users = [];
    //     users.push(data);
    //   },
    // };
    const database = new UserRepository();
    const bcryptHashAdapter = new HashEncrypt();
    const createUseUseCase = new RegisterUser(database, bcryptHashAdapter);
    const user = await createUseUseCase.execute(
      'Eurico',
      `${Math.random()}@mail.com`,
      '1234'
    );
    expect(user).toHaveProperty('email');
  });

  // test('Deve buscar um usuário', async () => {
  //   const database = new UserRepository();
  //   const bcryptHashAdapter = new HashEncrypt();
  //   const createUseUseCase = new RegisterUser(database, bcryptHashAdapter);

  //   expect(user).toHaveProperty('email');
  // });

  // test('Deve registrar um com senha criptografada', async () => {
  //   const database: DatabaseInterface = {
  //     async insert(data: User) {
  //       const users = [];
  //       users.push(data);
  //     },
  //   };
  //   const bcryptHashAdapter = new HashEncrypt();
  //   const createUseUseCase = new RegisterUser(database, bcryptHashAdapter);
  //   const user = await createUseUseCase.execute(
  //     'Eurico',
  //     'eurico@mail.com',
  //     '1234'
  //   );
  //   const passIsHashed = bcryptHashAdapter.compare('1234', user.password!);
  //   expect(user.password).toBeDefined();
  //   expect(passIsHashed).toBe(true);
  // });
});
