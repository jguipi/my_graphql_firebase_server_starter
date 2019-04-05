import { ILogin } from "./ILogin";

export class Login implements ILogin {
  execute(email: string, password: string): Promise<Iuser> {}
}
