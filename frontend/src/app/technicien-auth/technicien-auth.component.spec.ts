import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicienAuthComponent } from './technicien-auth.component';

describe('TechnicienAuthComponent', () => {
  let component: TechnicienAuthComponent;
  let fixture: ComponentFixture<TechnicienAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicienAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicienAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
