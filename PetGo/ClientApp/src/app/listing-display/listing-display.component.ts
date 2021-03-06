import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../shared/message.service';
import validUrl from 'valid-url';
import { Router } from '@angular/router';
import { ListingWithPet } from '../shared/listing.service';
@Component({
  selector: 'app-listing-display',
  templateUrl: './listing-display.component.html',
  styleUrls: ['./listing-display.component.css']
})
export class ListingDisplayComponent {

  public listingsWithPets: ListingWithPet[];

  constructor(
    http: HttpClient,
    private messageService: MessageService,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
    http.get<ListingWithPet[]>(this.createURL('api/listings')).subscribe(result => {
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
  createURL(url: string): string {
    return this.baseUrl + url;
  }
  find(id) {
    this.router.navigate([`/listings/${id}`]);
  }
}


