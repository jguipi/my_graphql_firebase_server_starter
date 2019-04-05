import { FirestoreQueryObject } from "./../../interfaces/firebase/IFirebase";
import { IFirebase } from "../../interfaces/firebase/IFirebase";

export class FirebaseProvider implements IFirebase {
  private _firebase;
  private _firebaseAdmin;
  private _database;

  constructor(firebase, firebaseAdmin) {
    this._firebase = firebase;
    this._firebaseAdmin = firebaseAdmin;
    this._database = firebaseAdmin.firestore();
  }

  public getNewID(collection: string): string {
    var docRef = this._database.collection(collection).doc();
    return docRef.id;
  }

  public getNewTimestamp() {
    return new Date();
  }

  public setDoc(collectionRef: string, data: Object): Promise<void> {
    return new Promise((resolve, reject) => {
      let docID = this.getNewID(collectionRef);
      let generatedTimestamp = this.getNewTimestamp();
      data["id"] = docID;
      data["creationDate"] = generatedTimestamp;
      data["lastUpdate"] = generatedTimestamp;
      this._database
        .collection(collectionRef)
        .doc(docID)
        .set(data)
        .then(() => resolve())
        .catch(e => reject(e));
    });
  }

  public getDoc(
    collectionRef: string,
    docID: string,
    queryList?: Array<FirestoreQueryObject>
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if (queryList) {
        let documentQuery = this._database.collection(collectionRef);
        queryList.map(({ argument, operator, value }) => {
          documentQuery = documentQuery.where(argument, operator, value);
        });
        let array: any[] = [];
        documentQuery.onSnapshot(querySnapshot => {
          querySnapshot.forEach(doc => {
            array.push(doc.data());
          });
          resolve(array);
        });
        if (!array) {
          reject(e => reject(e));
        }
      } else {
        this._database
          .collection(collectionRef)
          .doc(docID)
          .get()
          .then(doc => {
            resolve(doc.data());
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
            reject(e => reject(e));
          });
      }
    });
  }

  public updateDoc(
    collectionRef: string,
    docID: string,
    data: Object
  ): Promise<void> {
    data["lastUpdate"] = this.getNewTimestamp();
    return this._database
      .collection(collectionRef)
      .doc(docID)
      .update(data);
  }

  public getCollection(collectionRef: string): any {
    return this._database.collection(collectionRef).get();
  }

  public deleteDoc(collectionRef: string, docID: string): Promise<any> {
    return this._database
      .collection(collectionRef)
      .doc(docID)
      .delete();
  }

  public createUserAuthWithEmail(
    email: string,
    password: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this._firebaseAdmin.auth
        .createUserWithEmailAndPassword(email, password)
        .then(async response => {
          let data = {
            email
          };
          await this.setDoc("users", data);
          resolve(response);
        })
        .catch(() => reject(e => reject(e)));
    });
  }

  public resetPassword(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this._firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => resolve())
        .catch(() => reject(e => reject(e)));
    });
  }

  public authWithEmail(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this._firebaseAdmin.auth
        .signInWithEmailAndPassword(email, password)
        .then(response => resolve(response))
        .catch(() => e => reject(e));
    });
  }

  public logOff(): Promise<void> {
    return new Promise<any>((resolve, reject) => {
      this._firebase.auth
        .signOut()
        .then(() => resolve())
        .catch(() => reject(e => reject(e)));
    });
  }
}
