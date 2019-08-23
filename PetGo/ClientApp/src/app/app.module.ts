import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from './auth/auth.interceptor'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { ListingDisplayComponent } from './listing-display/listing-display.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ActivityDisplayComponent } from './activity-display/activity-display.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { ListingCreationComponent } from './listing-creation/listing-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SideBarComponent,
    UserDisplayComponent,
    PetDisplayComponent,
    ListingDisplayComponent,
    MessageDisplayComponent,
    LoginComponent,
    SignupComponent,
    ActivityDisplayComponent,
    RegistrationComponent,
    UserComponent,
    ListingCreationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/users', pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegistrationComponent },
      { path: 'users', component: UserDisplayComponent, pathMatch: 'full' },
      { path: 'pets', component: PetDisplayComponent },
      { path: 'listings', component: ListingDisplayComponent },
      { path: 'messages', component: MessageDisplayComponent },
      { path: 'listing-creation', component: ListingCreationComponent },
    ])
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
