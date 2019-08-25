
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map } from "rxjs/operators";
import { Pet } from '../pet-display/pet-display.component';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public pet: Pet;
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURL = 'https://localhost:43372/api';

  // this is a form we built, it has the fields we need to send, with validators
  formModel = this.fb.group({
    Title: "",
    PetName: "",
    Type: "",
    Breeds:"",
    Age: "",
    Ownership_length: "",
    Img_url: "",
    Description: ""
  });



  
  CreatePet(pet) {

    console.log("about to try to post this pet: ");
    console.log(pet);
    console.log(this.BaseURL + '/pets')
    
    //return this.http.post(this.BaseURL + '/pets', pet);
    return this.http.post('/api/pets', pet).pipe(map(res => res.results || []));

  }


  login(formData) {
    return this.http.post(this.BaseURL + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURL + '/UserProfile');
  }
}
