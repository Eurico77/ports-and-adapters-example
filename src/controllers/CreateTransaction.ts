import type { Express, Request, Response } from 'express';
import SaveTransaction from '@/core/transaction/CreateTransaction';
import User from '@/core/user/User';

export default class CreateTransactionController {
  constructor(
    private readonly httpServer: Express,
    private readonly saveTransactionUseCase: SaveTransaction,
    ...middleware: any[]
  ) {
    const handler = async (request: Request, response: Response) => {
      try {
        const transaction = {
          description: request.body.description,
          value: +request.body.value,
          expiresDate: new Date(request.body.expiresDate),
        };
        await this.saveTransactionUseCase.execute({
          transaction,
          id: request.params?.id,
          user: request.user as User,
        });
        response.sendStatus(201);
      } catch (error: any) {
        response.json({
          error: error.message,
          status: 401,
        });
      }
    };
    this.httpServer.post('/transactions', middleware, handler);
    this.httpServer.post('/transactions:id', middleware, handler);
  }
}
