import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavArrlistComponent } from './nav-arrlist.component';

describe('NavArrlistComponent', () => {
  let component: NavArrlistComponent;
  let fixture: ComponentFixture<NavArrlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavArrlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavArrlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
