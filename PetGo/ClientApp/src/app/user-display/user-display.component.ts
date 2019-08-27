import { Component } from '@angular/core';
import { UserService, Users } from '../shared/user.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent {
  public users: Users[];
  // tslint:disable-next-line: max-line-length
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}

