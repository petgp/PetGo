import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    const user = {
      Email: form.value.Email,
      Password: form.value.Passwords.Password
    };

    this.service.register().subscribe(
      (res: any) => {
        console.log('res', res)
        if (res.succeeded) {
          console.log('first step')
          this.service.formModel.reset();
          console.log('New user created', 'Registration successful');
          this.login(user);
        } else {
          console.log('i is in errors')
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                console.log('Username is already taken', 'Registration failed');
                // Username already taken
                break;
              default:
                console.log(element.description, 'Registration failed');
                // registration failed
                break;
            }
          });
        }
      },
      err => {
        
        console.log('my error', err);
      }
    );
    console.log("under func")
  }

  login(data) {
    console.log('in login', data)
    this.service.login(data).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status === 400) {
          console.log('Incorrect email or password', 'Authentication failed');
        } else {
          console.log(err);
        }
      }
    );
  }
}
