import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Document } from '../clases/Documento';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  currentDocument = this.socket.fromEvent<Document>('Notificacion');
  documents = this.socket.fromEvent<[]>('Notificaciones');

  constructor(private socket: Socket) { }


  getNotificacion(id: string) {
    console.log("pasando por ge notifi")
    this.socket.emit('getNotificacion', id);
  }

  newNotificacion(document:Document) {
    console.log("pasando por neew notific")
    this.socket.emit('addNotificacion', document);
  }

  editNotificacion(document: Document) {
    console.log("pasando por edit notific")
    this.socket.emit('editNotificacion', document);
  }


  // private docId() {
  //   let text = '';
  //   const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //   for (let i = 0; i < 5; i++) {
  //     text += possible.charAt(Math.floor(Math.random() * possible.length));
  //   }

    // return text;
  // }
}