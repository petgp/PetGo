import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCreationComponent } from './listing-creation.component';

describe('ListingCreationComponent', () => {
  let component: ListingCreationComponent;
  let fixture: ComponentFixture<ListingCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
