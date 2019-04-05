import { IAuth } from "../IAuth";
import { INoSQL } from "../INoSQL";

export interface IFirebase extends IAuth, INoSQL {}

export interface FirestoreQueryObject {
    argument: string;
    operator: "==" | ">" | "<" | ">=" | "<=";
    value: string;
}