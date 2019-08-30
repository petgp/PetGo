import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Pet } from '../pet-display/pet-display.component';
import { Users } from '../user-display/user-display.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { JwtHelper } from '../helper';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css'],
})

export class PetDetailComponent implements OnInit {
  @Input() pet: Pet;
  @Input() user: Users;
  constructor(
    private http: HttpClient,
    private location: Location,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private jwt: JwtHelper,
    private fb: FormBuilder,
    @Inject("BASE_URL") private baseUrl: string
  ) { }

  formModel = this.fb.group({
    name: '',
    age: 0,
    type: ''
  });

  ngOnInit(): void {



    this.getHero();
  }

  getHero(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.http.get<Pet>(this.baseUrl + 'api/pets/' + id).subscribe(result => {
      this.pet = result;
      this.log('fetched pet ' + this.pet.owner_id)
      //  const token = localStorage.getItem('token');
      //  const owner = this.jwt.decodeToken(token)
      //  const name = owner.UserId
      //  this.http.get<Users>(this.baseUrl + 'api/ApplicationUser/' + name).subscribe(result => {
      //    this.user = result;
      //    console.log('owndername, ', this.pet);
      //  })

    })
  }



  updateHero(form) {
    console.log(this.route)
    const id = this.route.snapshot.params.id;
    console.log(id)
    let body = {
      Id: id,
      Name: this.formModel.value.name,
      Age: this.formModel.value.age,
      Type: this.formModel.value.type
    };
    console.log(body)
    console.log("in here")

    return this.http.put<Pet>(this.baseUrl + 'api/pets' + id, body).subscribe(result => {
        console.log('result', result)
    });
  }


  private log(message: string) {
    this.messageService.addMessage(`PetGoService: ${message}`);
  }

  private handleError(operation: string, error) {
    this.log(`${operation} failed: ${error.message}`);
  }


}
