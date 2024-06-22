export default class User {
  constructor(
    public name: string,
    public email: string,
    public id?: string,
    public password?: string
  ) {}
}
