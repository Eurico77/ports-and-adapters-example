import EncryptHash from '@/core/user/Encrypt';
import * as bcrypt from 'bcrypt';

export default class HashEncrypt implements EncryptHash {
  hash(value: string): string {
    const salts = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salts);
  }
  compare(value: string, hashValue: string): boolean {
    return bcrypt.compareSync(value, hashValue);
  }
}
