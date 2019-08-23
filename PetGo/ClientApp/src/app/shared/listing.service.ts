
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

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
    Img_url: ""
  });



  
  register() {
    let body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      //FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
      //Address: this.formModel.value.Address,
      //PhoneNumber: this.formModel.value.PhoneNumber,
      //EmergencyName: this.formModel.value.EmergencyName,
      //EmergencyNumber: this.formModel.value.EmergencyNumber,
      //EventCode: this.formModel.value.EventCode
    };
    return this.http.post(this.BaseURL + '/ApplicationUser/Register', body);

  }

  login(formData) {
    return this.http.post(this.BaseURL + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURL + '/UserProfile');
  }
}
