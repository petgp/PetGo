import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { ListingDisplayComponent } from './listing-display/listing-display.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ListingCreationComponent } from './listing-creation/listing-creation.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'users', component: UserDisplayComponent, pathMatch: 'full' },
  { path: 'users/:id', component: UsersDetailComponent },
  { path: 'pets', component: PetDisplayComponent },
  { path: 'listings', component: ListingDisplayComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailComponent },
  { path: 'listing-creation', component: ListingCreationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
