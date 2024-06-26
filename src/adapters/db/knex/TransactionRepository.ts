import TransactionDbProvider from '@/core/transaction/Bd';
import Transaction from '@/core/transaction/Transaction';
import connection from './connection';

export default class TransactionRepository implements TransactionDbProvider {
  async add(transaction: Transaction): Promise<void> {
    await connection('transactions').insert(transaction);
  }

  update(transaction: Transaction): Promise<void> {
    throw new Error('Method not implemented.');
  }
  searchById(idUsuario: string, id: string): Promise<Transaction | null> {
    throw new Error('Method not implemented.');
  }
  searchByMonth(
    idUsuario: string,
    ano: number,
    mes: number
  ): Promise<Transaction[]> {
    throw new Error('Method not implemented.');
  }
}
