import { Component, OnInit, Input, Inject } from '@angular/core';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListingService, Listing } from '../shared/listing.service';
import { Users, UserService } from '../shared/user.service';


@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
  @Input() list: Listing;
  @Input() user: Users;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private userService: UserService
  ) {
    const id = this.route.snapshot.params.id;
    this.listingService.getSingleListing(id).subscribe(listing => {
      this.list = listing;
      this.userService.getSingleUser(listing.userId).subscribe(user => {
        this.user = user;
      });
    });
  }

  ngOnInit(): void {

  }
}
