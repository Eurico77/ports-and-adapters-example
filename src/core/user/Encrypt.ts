export default interface EncryptHash {
  hash(value: string): string;
  compare(value: string, hashValue: string): boolean;
}
