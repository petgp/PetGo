import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDisplayComponent } from './listing-display.component';

describe('ListingDisplayComponent', () => {
  let component: ListingDisplayComponent;
  let fixture: ComponentFixture<ListingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
