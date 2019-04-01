export interface IAuthFacade {
    authWithEmail(email: string): Promise<void>;
    createUserAuthWithEmail(email: string): Promise<void>;
    logOff(): Promise<void>;
}