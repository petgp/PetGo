import { Injectable } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  constructor() { }
  private delegates: any[] = [];
  public messages: object[] = [];
  addDelegate(delegate: any): void {
    this.delegates.push(delegate);
  }
  addMessage(message: string): void {
    this.messages.push(this.createMessage(message));
    if (this.delegates.length !== 0) {
      this.delegates.map(d => d.userAccessedData());
    }
  }
  clear(): void {
    this.messages = [];
  }
  createMessage(message: string): object {
    const tempMessage = new Message();
    tempMessage.id = this.messages.length;
    tempMessage.message = message;
    tempMessage.dateTime = new Date().toUTCString();
    return tempMessage;
  }
}
class Message {
  public id: number;
  public message: string;
  public dateTime: string;
}
