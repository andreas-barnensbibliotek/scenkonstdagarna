import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrlistComponent } from './arrlist.component';

describe('ArrlistComponent', () => {
  let component: ArrlistComponent;
  let fixture: ComponentFixture<ArrlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
