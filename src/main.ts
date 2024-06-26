import 'dotenv/config';
import express from 'express';
import RegisterUserController from './controllers/RegisterUserController';
import RegisterUser from './core/user/RegisterUser';
import UserRepository from './adapters/db/knex/userRepository';
import HashEncrypt from './adapters/auth/HashEncrypt';
import UserLogin from './core/user/UserLogin';
import JsonWebToken from './adapters/auth/Token';
import LoginUserController from './controllers/LoginUserController';
import SaveTransaction from './core/transaction/CreateTransaction';
import TransactionRepository from './adapters/db/knex/TransactionRepository';
import CreateTransactionController from './controllers/CreateTransaction';
import UserMiddleware from './core/user/UserMiddleware';

const app = express();
const port = process.env.PORT ?? 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`🔥 Server is running on port ${port}`);
});

// Provedores
const userDatabaseRepository = new UserRepository();
const transactionDatabaseRepository = new TransactionRepository();
const hashProvider = new HashEncrypt();
const tokenProvider = new JsonWebToken();
const userAuthenticated = UserMiddleware(userDatabaseRepository, tokenProvider);

// UseCases
const registerUseUseCase = new RegisterUser(
  userDatabaseRepository,
  hashProvider
);
const loginUserUseCase = new UserLogin(
  userDatabaseRepository,
  hashProvider,
  tokenProvider
);
const saveTransaction = new SaveTransaction(transactionDatabaseRepository);

// Controllers
new LoginUserController(app, loginUserUseCase);
new RegisterUserController(app, registerUseUseCase);
new CreateTransactionController(app, saveTransaction, userAuthenticated);
