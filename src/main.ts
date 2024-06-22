import 'dotenv/config';
import express from 'express';
import RegisterUserController from './controllers/RegisterUserController';
import RegisterUser from './core/user/RegisterUser';
import UserRepository from './adapters/db/knex/userRepository';
import HashEncrypt from './adapters/auth/HashEncrypt';

const app = express();
const port = process.env.PORT ?? 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`🔥 Server is running on port ${port}`);
});

const database = new UserRepository();
const hashProvider = new HashEncrypt();
const registerUseUseCase = new RegisterUser(database, hashProvider);
new RegisterUserController(app, registerUseUseCase);
