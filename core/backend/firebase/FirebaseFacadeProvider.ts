import {IFirebaseFacade} from "./IFirebaseFacade"

export class FirebaseFacadeProvider implements IFirebaseFacade {

    constructor(
        private firebase: any,
        private firebaseAdmin: any) { }

    public authWithEmail(email: string): Promise<void>{

    }
    public createUserAuthWithEmail(email: string): Promise<void>{

    }
    public logOff(): Promise<void>{

    }

    public getNewID(): string{

    }

	public getDoc(collectionRef: string, docID: string, queryList?: any): Promise<void>{

    }
	public getCollection(collectionRef: string): Promise<void>{

    }
	public updateDoc(collectionRef: string, docID: string, data: Object): Promise<void>{

    }
	public deleteDoc(collectionRef: string, docID: string): Promise<void>{

    }
	public setDoc(collectionRef: string, docID: string, data: Object): Promise<void>{

    }
}

