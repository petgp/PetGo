import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-display',
  templateUrl: './listing-display.component.html',
  styleUrls: ['./listing-display.component.css']
})
export class ListingDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export interface Listing {
  id: number;
  date: number;
  timeoutDate: number;
  userId: number;
  petId: number;
  title: string;
  description: string;
  toUserId: number
  

}
