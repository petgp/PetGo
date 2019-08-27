import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Users } from '../user-display/user-display.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
    private http: HttpClient,
    private location: Location,
    private route: ActivatedRoute,
    private messageService: MessageService,
    @Inject('BASE_URL') private baseUrl: string) { }
  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<Users>(this.baseUrl + 'api/ApplicationUser/' + id).subscribe(result => {
      console.log(result);
      this.user = result;
      console.log(this.user);
      this.log('fetched user ' + id);
    }, error => this.handleError('getUser', error));
  }
  discard(): void {
    console.log('HELLO?');
    this.location.back();
  }
  save(): void {
    console.log('HELLO' + this.user.userName);
    const id = this.route.snapshot.paramMap.get('id');
    this.http.post<Users>('/api/ApplicationUser/update', this.user).subscribe(result => {
      this.user = result;
      this.log('updated user ' + id);
      this.location.replaceState('/users');
      location.reload();
    }, error => this.handleError('updateUser', error));
  }
  goBack(): void {
    this.location.back();
  }
  private log(message: string) {
    this.messageService.addMessage(`PetGoService: ${message}`);
  }
  private handleError(operation: string, error) {
    this.log(`${operation} failed: ${error.message}`);
  }
}
