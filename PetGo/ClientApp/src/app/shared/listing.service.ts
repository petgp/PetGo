
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Pet, PetDisplayComponent } from '../pet-display/pet-display.component';
import { MessageService } from '../message.service';
import { Listing, ListingWithPet } from '../listing-display/listing-display.component';
import { Observable } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public pet: Pet;
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private messageService: MessageService) { }

  // this is a form we built, it has the fields we need to send, with validators
  formModel = this.fb.group({
    Title: "",
    PetName: "",
    Type: "",
    Breeds: "",
    Age: "",
    Ownership_length: "",
    Img_url: "",
    Description: ""
  });



  CreatePet(pet) {
    //return this.http.post(this.BaseURL + '/pets', pet);
    return this.http.post<Pet>(this.createURL('api/pets'), pet);

  }
  CreateListing(listing) {
    return this.http.post<Listing>(this.createURL('api/listings'), listing);
  }
  createURL(url: string): string {
    return this.baseUrl + url;
  }
  getSingleListing(id: number): Observable<List> {
    return this.http.get<List>('/api/listings/' + id).pipe(tap(_ => this.messageService.log("FetchedListing " + id)),
      catchError(this.messageService.handleError<List>("foundlisting"))
    )
  }


  getSinglePet(id: number) {

    return this.http.get(`/api/pets/${id}`).pipe(tap(_ => this.messageService.log("FetchedListing " + id)), catchError(this.messageService.handleError("found Listing")))
  }

  updateMyPet(payload: Pet): Observable<Pet> {
    console.log('pet', payload.id)

    return this.http.put<Pet>(`/api/pets/update`, payload)
  }
  updateListing(payload: List): Observable<List> {
    console.log('list', payload)
    return this.http.put<List>('api/listings/update', payload)
  }

  // deleteListPet(id: number): Observable<List> {
  //   return this.http.delete<List>(`api/pets/${id}`)
  // }

}

export interface List {
  id: number;
  date: string;
  timeoutDate: string;
  userId: string;
  petId: number;
  title: string;
  description: string;
  toUserId: string;
}


