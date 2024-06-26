import 'dotenv/config';
import jwt from 'jsonwebtoken';
import TokenProvider, { UserPayload } from '@/core/user/TokenProvider';

export default class JsonWebToken implements TokenProvider {
  private static privateKey = process.env.SECRET_KEY as string;

  verifyToken(token: string): object | string {
    return jwt.verify(token, JsonWebToken.privateKey);
  }

  sign(payload: UserPayload): string {
    const token = jwt.sign(payload, JsonWebToken.privateKey);
    return token;
  }
}
