import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotesplatsComponent } from './motesplats.component';

describe('MotesplatsComponent', () => {
  let component: MotesplatsComponent;
  let fixture: ComponentFixture<MotesplatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotesplatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotesplatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
