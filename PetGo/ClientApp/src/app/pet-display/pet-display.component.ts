import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../shared/message.service';
import validUrl from 'valid-url';
import { JwtHelper } from '../helper';
import { Pet } from '../shared/listing.service';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent {

  public pets: Pet[];

  constructor(http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private messageService: MessageService,
    private jwt: JwtHelper) {
    const token = localStorage.getItem('token');
    const decoded = this.jwt.decodeToken(token);
    http.get<Pet[]>(baseUrl + 'api/pets').subscribe(result => {
      this.pets = result.filter(res => res.owner_id === decoded);
      this.messageService.log('FetchedPets');
    }, error => this.messageService.handleError('getPets', error));
  }
  public validImg(img_url: string): string {
    if (validUrl.isUri(img_url)) {
      return img_url;
    }
    return './default-pet-icon.png';
  }
  // deletePet(id: number){
  //   this.listingService.deleteListPet(id).subscribe((result) => console.log('finished'))
  // }
  createURL(url: string): string {
    return this.baseUrl + url;
  }
}
