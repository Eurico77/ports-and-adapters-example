import type { Express } from 'express';
import RegisterUser from '@/core/user/RegisterUser';

export default class RegisterUserController {
  constructor(
    private readonly httpServer: Express,
    private readonly registerUseUseCase: RegisterUser
  ) {
    this.httpServer.post('/users', async (request, response) => {
      await this.registerUseUseCase.execute(request.body);
      response.sendStatus(201);
    });
  }
}
