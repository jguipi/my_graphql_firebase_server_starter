export interface INoSQLFacade {
	getNewID(): string;
	getDoc(collectionRef: string, docID: string, queryList?: any): Promise<void>;
	getCollection(collectionRef: string): Promise<void>;
	updateDoc(collectionRef: string, docID: string, data: Object): Promise<void>;
	deleteDoc(collectionRef: string, docID: string): Promise<void>;
	setDoc(collectionRef: string, docID: string, data: Object): Promise<void>;
}
