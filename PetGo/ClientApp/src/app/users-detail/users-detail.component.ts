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
  public selectedCar = '';
  public items: Array<Object> = [{
    id: 1,
    label: 'aLabel',
    subItem: { name: 'aSubItem' }
  }, {
    id: 2,
    label: 'bLabel',
    subItem: { name: 'bSubItem' }
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
      this.user = result;
      this.log('fetched user ' + id);
    }, error => this.handleError('getUser', error));
  }
  discard(): void {
    this.location.back();
  }
  save(): void {
    // this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
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
