import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private firestore: AngularFirestore) { }

  getMessages(): Observable<any[]> {
    return this.firestore.collection('messages').valueChanges();
  }
  saveMessage(name: string, message: string) {
    this.firestore.collection('messages').add({name, message}).then(r => console.log(r));
  }
}
