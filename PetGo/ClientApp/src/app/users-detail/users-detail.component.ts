import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService, Users } from '../shared/user.service';
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css'],
})
export class UsersDetailComponent implements OnInit {
  @Input() user: Users;
  // public data = {
  //   phoneNumberConfirmed: 'false',
  //   emailConfirmed: 'false',
  //   twoFactorEnabled: 'true'
  // };
  public items: Array<Object> = [
    {
      value: 'true'
    }, {
      value: 'false'
    }];
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getSingleUser(id).subscribe(user => this.user = user);
  }
  discard(): void {
    this.location.back();
  }
  save(): void {
    this.userService.updateUser(this.user).subscribe(users => {
      this.router.navigateByUrl('/users');
    });

  }
  goBack(): void {
    this.location.back();
  }
}
