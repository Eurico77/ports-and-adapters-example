import User from './User';
import { Request, Response, NextFunction } from 'express';
import DatabaseInterface from './Bd';
import TokenProvider from './TokenProvider';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User | string;
  }
}

export default function UserMiddleware(
  dbProvider: DatabaseInterface,
  tokenProvider: TokenProvider
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const forBiden = () => res.sendStatus(403).send('Invalid Token');
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return forBiden();
    const decoded = tokenProvider.verifyToken(token) as User;
    const user = await dbProvider.findByEmail(decoded.email);
    if (!user) return forBiden();
    req.user = user;
    next();
  };
}
