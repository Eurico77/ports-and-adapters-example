import * as bcrypt from 'bcrypt';
import EncryptHash from '@/core/ports/Encrypt';

export default class HashEncrypt implements EncryptHash {
  hash(value: string): string {
    return bcrypt.hashSync(value, 10);
  }
  compare(value: string, hashValue: string): boolean {
    return bcrypt.compareSync(value, hashValue);
  }
}
