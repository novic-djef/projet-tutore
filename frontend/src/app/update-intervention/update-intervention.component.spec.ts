import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterventionComponent } from './update-intervention.component';

describe('UpdateInterventionComponent', () => {
  let component: UpdateInterventionComponent;
  let fixture: ComponentFixture<UpdateInterventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInterventionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInterventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
