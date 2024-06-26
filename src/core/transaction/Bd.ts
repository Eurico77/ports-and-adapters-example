import Transaction from './Transaction';

export default interface TransactionDbProvider {
  add(transaction: Transaction): Promise<void>;
  update(transaction: Transaction): Promise<void>;
  searchById(idUsuario: string, id: string): Promise<Transaction | null>;
  searchByMonth(
    idUsuario: string,
    ano: number,
    mes: number
  ): Promise<Transaction[]>;
}
