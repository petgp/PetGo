import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
import { Router } from '@angular/router';
import { JwtHelper } from '../helper';

@Component({
  selector: 'app-listing-creation',
  templateUrl: './listing-creation.component.html',
  styleUrls: ['./listing-creation.component.css']
})
export class ListingCreationComponent implements OnInit {

  constructor(public service: ListingService, private router: Router, private jwt: JwtHelper) { }

  ngOnInit() {
  }


  onSubmit(form) {

    //if(localStorage.getItem('token') !== null){
    //const token = localStorage.getItem('token')
    //const decoded = this.jwt.decodeToken(token);
    //}else{
    //	return 'Fuck off'
    //	}

    const UserId = 6000;//decoded
    const pet = {
      Owner_id: UserId,
      Name: form.value.PetName,
      Type: form.value.Type,
      Img_url: form.value.Img_url,
      Age: form.value.Age,
      Ownership_length: form.value.Ownership_length,
      Breeds: ['shoez']
    }
    const listing = {
      Date: Date.now(),
      TimeoutDate: Date.now() + (24 * 3600),
      UserId: UserId,
      PetId: null,
      Title: form.value.Title,
      Description: form.value.Description
    }

    this.service.CreatePet(pet).subscribe(result => {
      listing.PetId = result.id;
      this.service.CreateListing(listing).subscribe(() => {
        form.reset();
        this.router.navigate(['listings']);
      }, error => console.log(error));
    }, error => console.error(error));
  }
}





