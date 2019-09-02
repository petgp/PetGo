import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import validUrl from 'valid-url';
import { JwtHelper } from '../helper';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent {

  public pets: Pet[];
  

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private messageService: MessageService, private jwt: JwtHelper) {

    const token = localStorage.getItem('token')
    const decoded = this.jwt.decodeToken(token);
    
  constructor(http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private messageService: MessageService) {
    http.get<Pet[]>(this.createURL('api/pets')).subscribe(result => {
      this.pets = result;
      this.messageService.log('FetchedPets');
    }, error => this.messageService.handleError('getPets', error));
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
}



export interface Pet {
  id: number;
  owner_id: string;
  name: string;
  type: string;
  img_url: string;
  breeds: string[];
  breed: string;
  age: number;
  ownership_length: number;

}
