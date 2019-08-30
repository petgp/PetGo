import { Component, OnInit } from '@angular/core';
import { ListingService } from '../shared/listing.service';
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
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
    let reduced = null
	if(localStorage.getItem('token') !== null){
	const token = localStorage.getItem('token')
      const decoded = this.jwt.decodeToken(token);
      const newArr = decoded.UserId.split('-');
      const newVal = decoded + newArr[1].repeat(3201) + newArr[3].repeat(2109);
      const hashed = newVal.replace('-', '');
      const reduced = hashed.split('').reduce((acc, elem) => {
        if (typeof elem === 'string') {
          elem = elem.charCodeAt(0)
        }
        return acc += elem
      }, 0)
	}else{
		return 'Fuck off'
		}

    const UserId = reduced;
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
      console.log('result', result);
      listing.PetId = result.id;
      console.log('create pet was good');
      this.service.CreateListing(listing).subscribe(result => {
        console.log(result);
        console.log('create listing was good');
        form.reset();
        this.router.navigate(['listings']);
      }, error => console.log(error));
    }, error => console.error(error));

   
  }
    
   
}





