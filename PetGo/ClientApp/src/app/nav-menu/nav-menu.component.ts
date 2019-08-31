import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  constructor(private router: Router, public service: UserService, private messageService: MessageService) { }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logout() {
    this.service.logout();
    this.router.navigateByUrl('/login');
  }
}
