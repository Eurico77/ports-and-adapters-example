import HashEncrypt from '../src/adapters/auth/HashEncrypt';
import { DatabaseInterface } from '../src/core/ports/Bd';
import RegisterUser from '../src/core/usecases/RegisterUser';

describe('Register User Use Case', () => {
  test('Deve registrar um usuário', () => {
    const database: DatabaseInterface = {
      insert(data) {
        const users = [];
        users.push(data);
      },
    };
    const bcryptHashAdapter = new HashEncrypt();
    const createUseUseCase = new RegisterUser(database, bcryptHashAdapter);
    const user = createUseUseCase.execute('Eurico', 'eurico@mail.com', '1234');
    expect(user).toHaveProperty('id');
  });

  test('Deve registrar um com senha criptografada', async () => {
    const database: DatabaseInterface = {
      insert(data) {
        const users = [];
        users.push(data);
      },
    };
    const bcryptHashAdapter = new HashEncrypt();
    const createUseUseCase = new RegisterUser(database, bcryptHashAdapter);
    const user = await createUseUseCase.execute(
      'Eurico',
      'eurico@mail.com',
      '1234'
    );
    const passIsHashed = bcryptHashAdapter.compare('1234', user.password!);
    expect(user.password).toBeDefined();
    expect(passIsHashed).toBe(true);
  });
});
