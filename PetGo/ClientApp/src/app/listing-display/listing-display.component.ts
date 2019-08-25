import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listing-display',
  templateUrl: './listing-display.component.html',
  styleUrls: ['./listing-display.component.css']
})
export class ListingDisplayComponent  {

  public listings: Listing[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Listing[]>(baseUrl + 'api/listings').subscribe(result => {
      this.listings = result;
      console.log(this.listings);
    }, error => console.error(error));
  }

}

export interface Listing {
  id: number;
  date: number;
  timeoutDate: number;
  userId: number;
  petId: number;
  title: string;
  description: string;
  toUserId: number
  

}
