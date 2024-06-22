import { randomUUID } from 'crypto';

export default class Id {
  static generate(): string {
    //poderia ser um UUIdv4()
    return randomUUID();
  }
}
