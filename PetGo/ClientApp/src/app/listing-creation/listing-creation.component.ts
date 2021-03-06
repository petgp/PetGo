import { Component } from '@angular/core';
import { ListingService } from '../shared/listing.service';
import { Router } from '@angular/router';
import { JwtHelper } from '../helper';
import { MessageService } from '../shared/message.service';
@Component({
  selector: 'app-listing-creation',
  templateUrl: './listing-creation.component.html',
  styleUrls: ['./listing-creation.component.css']
})
export class ListingCreationComponent {

  constructor(public service: ListingService, private router: Router, private jwt: JwtHelper, private messageService: MessageService) { }

  onSubmit(form) {
    let decoded;
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      decoded = this.jwt.decodeToken(token);
    } else {
      return 'Fuck off';
    }
    const UserId = decoded;
    const pet = {
      Owner_id: UserId,
      Name: form.value.PetName,
      Type: form.value.Type,
      Img_url: form.value.Img_url,
      Age: form.value.Age,
      Ownership_length: form.value.Ownership_length,
      Breeds: ['shoez']
    };
    const listing = {
      Date: Date.now(),
      TimeoutDate: Date.now() + (24 * 3600),
      UserId: UserId,
      PetId: null,
      Title: form.value.Title,
      Description: form.value.Description
    };
    this.service.CreatePet(pet).subscribe(result => {
      listing.PetId = result.id;
      this.messageService.log('CreatePet');
      this.service.CreateListing(listing).subscribe(() => {
        this.messageService.log('CreateListing');
        form.reset();
        this.router.navigate(['listings']);
      }, error => {
        console.log(error);
        this.messageService.handleError('createListing', error);
      });
    }, error => {
      console.error(error);
      this.messageService.handleError('createListing', error);
    });
  }
}





