export interface ILogin {
    execute(email: string, password: string): Promise<Iuser>;
}