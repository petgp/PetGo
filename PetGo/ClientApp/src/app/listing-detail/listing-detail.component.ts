import { Component, OnInit, Input, Inject } from '@angular/core';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListingService, List } from '../shared/listing.service';
import { Users, UserService } from '../shared/user.service';


@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
  @Input() list: List;
  @Input() user: Users;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private userService: UserService
  ) {
    const id = this.route.snapshot.params.id;
    this.listingService.getSingleListing(id).subscribe(listing => {
      console.log('listing', listing);
      this.list = listing;
      console.log('HEREEEE', listing.userId);
      console.log('HEREEEE', this.userService);
      this.userService.getSingleUser(listing.userId).subscribe(user => {
        console.log('HERE', user);
        this.user = user;
      });
    });
  }

  ngOnInit(): void {

  }
}
