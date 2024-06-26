export default interface Transaction {
  id?: string;
  description: string;
  value: number;
  expiresDate: Date;
}
