export type UserPayload = {
  email: string;
  expiresIn?: string;
};

export default interface TokenProvider {
  sign(data: UserPayload): string;
  verifyToken(token: string): object | string;
}
