import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { PetDisplayComponent } from './pet-display/pet-display.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { ListingDisplayComponent } from './listing-display/listing-display.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';
import { ListingCreationComponent } from './listing-creation/listing-creation.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: '', redirectTo: '/users', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'users', component: UserDisplayComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'users/:id', component: UsersDetailComponent, canActivate: [AuthGuard] },
  { path: 'pets', component: PetDisplayComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: 'pets/:id', component: PetDetailComponent, canActivate: [AuthGuard] },
  { path: 'listings', component: ListingDisplayComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'listings/:id', component: ListingDetailComponent, canActivate: [AuthGuard] },
  { path: 'listing-creation', component: ListingCreationComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
