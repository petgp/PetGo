import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  public users: Users[];
  constructor(private http: HttpClient, private messageService: MessageService, @Inject('BASE_URL') private baseUrl: string) {
    this.http.get<Users[]>(this.baseUrl + 'api/ApplicationUser').subscribe(result => {
      this.users = result;
      console.log(result);
      this.log('fetched users');
    }, error => this.handleError('getUsers', error));
  }
  private log(message: string) {
    this.messageService.addMessage(`PetGoService: ${message}`);
  }
  private handleError(operation: string, error) {
    this.log(`${operation} failed: ${error.message}`);
  }

  ngOnInit() {

  }
}
export interface Users {
  id: string;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}
