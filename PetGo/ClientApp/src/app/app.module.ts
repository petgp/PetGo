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
import { LoginComponent } from './user/login/login.component';
import { ActivityDisplayComponent } from './activity-display/activity-display.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { ListingService } from './shared/listing.service';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { ListingCreationComponent } from './listing-creation/listing-creation.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';

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
    LoginComponent,
    ActivityDisplayComponent,
    RegistrationComponent,
    UserComponent,
    ListingCreationComponent,
    UsersDetailComponent,
    ListingDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
