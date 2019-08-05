import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    MessageDisplayComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'login', component: FetchDataComponent },
      { path: 'users', component: UserDisplayComponent },
      { path: 'pets', component: PetDisplayComponent },
      { path: 'listings', component: ListingDisplayComponent },
      { path: 'messages', component: MessageDisplayComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
