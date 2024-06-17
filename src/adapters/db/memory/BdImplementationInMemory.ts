import DatabaseInterface from '@/core/ports/Bd';

export default class Database implements DatabaseInterface {
  private static items: any[] = [];
  insert(item: any): void {
    Database.items.push(item);
  }
}
