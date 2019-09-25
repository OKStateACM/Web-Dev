import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class SocketService {
  socket: any; // socket that connects to socket.io server
  readonly uri: string = "ws://localhost:5000"

  constructor() { 
    this.socket = io(this.uri);
    this.emit('message', "Hello")
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      })
    })
  }
  
  emit(eventName: string, data: any) {
    this.socket.emit(eventName, "data");
    console.log("Sent message to server.")
  }
}


