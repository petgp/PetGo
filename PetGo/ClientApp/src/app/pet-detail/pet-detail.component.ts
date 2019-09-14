import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { Pet } from "../pet-display/pet-display.component";
import { ListingService, List } from "../shared/listing.service";
import { ListingWithPet } from "../listing-display/listing-display.component";
import validUrl from 'valid-url';

@Component({
  selector: "app-pet-detail",
  templateUrl: "./pet-detail.component.html",
  styleUrls: ["./pet-detail.component.css"]
})
export class PetDetailComponent implements OnInit {
  @Input() pet: Pet;
  @Input() list: List;
  listingWithPet: ListingWithPet;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.listingService.getSinglePet(id).subscribe((result: ListingWithPet) => {
      this.list = result.listing;
      this.pet = result.pet;
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
