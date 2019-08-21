import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  constructor() { }
  private delegates: any[] = [];
  public messages: object[] = [];
  public addDelegate(delegate: any): void {
    this.delegates.push(delegate);
  }
  public addMessage(message: string): void {
    this.messages.push(this.createMessage(message));
    if (this.delegates.length !== 0) {
      this.delegates.forEach(d => d.userAccessedData());
    }
  }
  public clear(): void {
    this.messages = [];
  }
  private createMessage(message: string): object {
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
