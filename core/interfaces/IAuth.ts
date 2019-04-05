export interface IAuth {
    authWithEmail(email: string, password: string): Promise<void>;
    createUserAuthWithEmail(email: string, password: string): Promise<void>;
    logOff(): Promise<void>;
}