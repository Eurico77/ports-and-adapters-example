import { DatabaseInterface } from '@/app/ports/Bd';
import RegisterUser from '@/app/users/RegisterUser';

test('Deve registrar um usuário', () => {
  const database: DatabaseInterface = {
    insert(data) {
      const users = [];
      users.push(data);
    },
  };
  const createUseUseCase = new RegisterUser(database);
  const user = createUseUseCase.execute('Eurico', 'eurico@mail.com', '1234');
  expect(user).toHaveProperty('id');
});
