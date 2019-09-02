import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from '../pet-display/pet-display.component';
import { MessageService } from '../message.service';
import validUrl from 'valid-url';
import {Router} from '@angular/router'

@Component({
  selector: 'app-listing-display',
  templateUrl: './listing-display.component.html',
  styleUrls: ['./listing-display.component.css']
})
export class ListingDisplayComponent {

  
  public listingsWithPets: ListingWithPet[];

  constructor(private router: Router, http: HttpClient, private messageService: MessageService, @Inject('BASE_URL') baseUrl: string) {
    http.get<ListingWithPet[]>(baseUrl + 'api/listings').subscribe(result => {
      this.listingsWithPets = result;
      this.messageService.log('FetchedListings');
    }, error => this.messageService.handleError('getListings', error));
  }
  public validImg(img_url: string): string {
    if (validUrl.isUri(img_url)) {
      return img_url;
    }
    return './default-pet-icon.png';
  }

  find(id){
    this.router.navigate([`/listings/${id}`]);
  }
}

export interface Listing {
  id: number;
  date: string;
  timeoutDate: string;
  userId: string;
  petId: number;
  title: string;
  description: string;
  toUserId: string;
}

export interface ListingWithPet {
  listing: Listing;
  pet: Pet;
}
