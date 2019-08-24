import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-listing-creation',
  templateUrl: './listing-creation.component.html',
  styleUrls: ['./listing-creation.component.css']
})
export class ListingCreationComponent implements OnInit {

  constructor(public service: ListingService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(form) {
    // this is temporary, we need to store and
    //  get userId from local storage or a token or something ?
    const UserId = 6000;
    const pet = {
      Owner_id: UserId,
      Name: form.value.PetName,
      Type: form.value.Type,
      Img_url: form.value.Img_url,
      Age: form.value.Age,
      Ownership_length: form.value.Ownership_length,
      Breeds: ['shoe']
    }
    
    this.service.CreatePet(pet).subscribe(result => {
      console.log(result);
    }, error => console.error(error));

   
    
    const listing = {
      Date: Date.now(),
      TimeoutDate: Date.now() + (24 * 3600),
      UserId: UserId,
      PetId: null,
      Title: form.value.Title,
      Description: form.value.Description
    }
  }
}





