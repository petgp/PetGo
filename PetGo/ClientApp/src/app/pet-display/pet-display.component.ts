import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import validUrl from 'valid-url';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent {

  public pets: Pet[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private messageService: MessageService) {
    http.get<Pet[]>(baseUrl + 'api/pets').subscribe(result => {
      this.pets = result;
      this.log('fetched pets');
    }, error => this.handleError('getPets', error));
  }
  public validImg(img_url: string): string {
    if (validUrl.isUri(img_url)) {
      return img_url;
    }
    return './default-pet-icon.png';
  }
  private log(message: string) {
    this.messageService.addMessage(`PetGoService: ${message}`);
  }
  private handleError(operation: string, error) {
    this.log(`${operation} failed: ${error.message}`);
  }
}



export interface Pet {
  id: number;
  owner_id: number;
  name: string;
  type: string;
  img_url: string;
  breeds: string[];
  breed: string;
  age: number;
  ownership_length: number;

}
