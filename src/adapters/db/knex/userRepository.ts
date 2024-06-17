import DatabaseInterface from '../../../core/ports/Bd';
import knex from './knexfile';

export default class UserRepository implements DatabaseInterface {
  async insert(data: any): Promise<void> {}
}
