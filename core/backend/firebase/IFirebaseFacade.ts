import { IAuthFacade } from "../IAuthFacade";
import { INoSQLFacade } from "../INoSQLFacade";

export interface IFirebaseFacade extends IAuthFacade, INoSQLFacade {}