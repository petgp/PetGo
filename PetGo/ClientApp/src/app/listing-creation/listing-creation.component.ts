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

}


