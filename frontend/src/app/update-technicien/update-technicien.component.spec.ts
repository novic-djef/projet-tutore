import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTechnicienComponent } from './update-technicien.component';

describe('UpdateTechnicienComponent', () => {
  let component: UpdateTechnicienComponent;
  let fixture: ComponentFixture<UpdateTechnicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTechnicienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTechnicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
