import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Err404pageComponent } from './err404page.component';

describe('Err404pageComponent', () => {
  let component: Err404pageComponent;
  let fixture: ComponentFixture<Err404pageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Err404pageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Err404pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
