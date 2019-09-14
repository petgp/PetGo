import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Pet } from '../pet-display/pet-display.component';
import { MessageService } from './message.service';
import { Listing } from '../listing-display/listing-display.component';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ListingService {

  public pet: Pet;
  constructor(private fb: FormBuilder, private http: HttpClient, private messageService: MessageService) { }
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
    return this.http.post<Pet>('/api/pets', pet);
  }
  CreateListing(listing) {
    return this.http.post<Listing>('/api/listings', listing);
  }
  getSingleListing(id: number): Observable<List> {
    return this.http.get<List>('/api/listings/' + id).pipe(tap(_ => this.messageService.log("FetchedListing " + id)),
      catchError(this.messageService.handleError<List>("Fetchlisting"))
    );
  }
  getSinglePet(id: number) {
    return this.http.get(`/api/pets/${id}`).pipe(
      tap(_ => this.messageService.log("FetchedListing " + id)),
      catchError(this.messageService.handleError("FetchListing")));
  }
  updateMyPet(payload: Pet): Observable<Pet> {
    return this.http.put<Pet>(`/api/pets/update`, payload);
  }
  updateListing(payload: List): Observable<List> {
    return this.http.put<List>('api/listings/update', payload);
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


