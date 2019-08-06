import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {
  public users: Users[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Users[]>(baseUrl + 'api/users').subscribe(result => {
      console.log('HELLO RESULTS', result)
      this.users = result;
    }, error => console.error(error));
  }

}
interface Users {
  Id: number;
  Name: string;
  Address: string;
  City: string;
  State: string;
  Zip: number;
  Country: string;
  Email: string;
  Password: string;
}
