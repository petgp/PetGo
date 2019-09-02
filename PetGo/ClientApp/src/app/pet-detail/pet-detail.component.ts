import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { MessageService } from "../message.service";
import { Pet } from "../pet-display/pet-display.component";
import { ListingService, List } from "../shared/listing.service";
import { formArrayNameProvider } from "@angular/forms/src/directives/reactive_directives/form_group_name";
import { ListingWithPet } from "../listing-display/listing-display.component";
import validUrl from 'valid-url';


@Component({
  selector: "app-pet-detail",
  templateUrl: "./pet-detail.component.html",
  styleUrls: ["./pet-detail.component.css"]
})
export class PetDetailComponent implements OnInit {
  @Input() pet: Pet;
           list: List;
           listingWithPet: ListingWithPet

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    
    this.listingService.getSinglePet(id).subscribe(({pet,listing}) => {
      this.pet = pet;
      this.list = listing;
    });
    
  }

  public validImg(img_url: string): string {
    if (validUrl.isUri(img_url)) {
      return img_url;
    }
    return './default-pet-icon.png';
  }

  save(): void {
    this.listingService.updateMyPet(this.pet).subscribe(result => {
        this.list.petId = result.id;
        this.list.title = result.name;
      this.listingService.updateListing(this.list).subscribe(() => {
        this.router.navigateByUrl("/pets");
      });
    });
  }
}
