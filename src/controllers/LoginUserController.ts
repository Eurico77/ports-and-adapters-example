import type { Express, Request, Response } from 'express';
import UserLogin from '@/core/user/UserLogin';

export default class LoginUserController {
  constructor(
    private readonly httpServer: Express,
    private readonly loginUserUseCase: UserLogin
  ) {
    this.httpServer.post(
      '/login',
      async (request: Request, response: Response) => {
        try {
          const responseData = await this.loginUserUseCase.execute(
            request.body
          );
          response.json(responseData);
        } catch (error: any) {
          response.json({
            error: error.message,
            status: 401,
          });
        }
      }
    );
  }
}
