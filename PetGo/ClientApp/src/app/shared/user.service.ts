
import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { JwtHelper } from '../helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public isLoggedIn = false;
  constructor(private fb: FormBuilder, private http: HttpClient, private messageService: MessageService, private jwt: JwtHelper) {
    if (localStorage.getItem('token') !== null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
  // this is a form we built, it has the fields we need to send, with validators
  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    //FullName: [''],
    //Address: ['', Validators.required],
    //PhoneNumber: ['', Validators.required],
    //EmergencyNumber: ['', Validators.required],
    //EmergencyName: ['', Validators.required],
    //EventCode: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  // We made this method to compare passwords. We set errors if they dont match
  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    // passwordMismatch
    // confirmPswrdCtrl.errors={required:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      // tslint:disable-next-line: triple-equals
      if (fb.get('Password').value != confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  // sign up method
  register() {
    let body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      //FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
      //Address: this.formModel.value.Address,
      //PhoneNumber: this.formModel.value.PhoneNumber,
      //EmergencyName: this.formModel.value.EmergencyName,
      //EmergencyNumber: this.formModel.value.EmergencyNumber,
      //EventCode: this.formModel.value.EventCode
    };
    return this.http.post('/api/ApplicationUser/Register', body);

  }
  login(formData) {
    return this.http.post('/api/ApplicationUser/Login', formData);
  }
  logout() {
    this.messageService.log('User: ' + this.getUserId() + ' Logged Out');
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }
  getUserId(): string {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token')
      const decoded = this.jwt.decodeToken(token);
      return decoded;
    } else {
      return 'Fuck off';
    }
  }
  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('api/ApplicationUser').pipe(
      tap(_ => this.messageService.log('FetchedUsers')),
      catchError(this.messageService.handleError<Users[]>('getUsers', []))
    );
  }
  getSingleUser(id: string): Observable<Users> {
    return this.http.get<Users>('api/ApplicationUser/' + id).pipe(
      tap(_ => this.messageService.log('FetchedUser ' + id)),
      catchError(this.messageService.handleError<Users>('getUser'))
    );
  }
  updateUser(user: Users): Observable<Users> {
    return this.http.post<Users>('/api/ApplicationUser/update', user).pipe(
      tap(_ => this.messageService.log('UpdatedUser ' + user.id)),
      catchError(this.messageService.handleError<Users>('updateUser'))
    );
  }
}
export interface Users {
  id: string;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd: string;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}
