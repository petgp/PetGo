import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../pet-display/pet-display.component';

@Component({
  selector: 'app-listing-display',
  templateUrl: './listing-display.component.html',
  styleUrls: ['./listing-display.component.css']
})
export class ListingDisplayComponent {


  public listingsWithPets: ListingWithPet[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ListingWithPet[]>(baseUrl + 'api/listings').subscribe(result => {
      this.listingsWithPets = result;
      console.log(this.listingsWithPets);
    }, error => console.error(error));
  }

}

export interface Listing {
  id: number;
  date: number;
  timeoutDate: number;
  userId: string;
  petId: number;
  title: string;
  description: string;
  toUserId: string;
}

interface ListingWithPet {
  listing: Listing;
  pet: Pet;
}
