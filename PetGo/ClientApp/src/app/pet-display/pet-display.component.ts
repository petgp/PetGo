import { Component, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pet-display',
  templateUrl: './pet-display.component.html',
  styleUrls: ['./pet-display.component.css']
})
export class PetDisplayComponent {

  public pets: Pets[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Pets[]>(baseUrl + 'api/pets').subscribe(result => {
      this.pets = result;
      console.log(this.pets);
    }, error => console.error(error));
  }
 
}



interface Pets {
  id:               number;
  owner_id:         number;
  name:             string;
  type:             string;
  img_url:          string;
  breeds:           string[];
  breed:            string;
  age:              number;
  ownership_length: number;

}
