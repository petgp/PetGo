import { Component, NgModule } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
@NgModule({
  imports: [],
  exports: [SideBarComponent],
  declarations: [SideBarComponent],
  providers: [],
})
export class HomeComponent {
}
