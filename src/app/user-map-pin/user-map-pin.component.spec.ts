import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMapPinComponent } from './user-map-pin.component';

describe('UserMapPinComponent', () => {
  let component: UserMapPinComponent;
  let fixture: ComponentFixture<UserMapPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMapPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMapPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
