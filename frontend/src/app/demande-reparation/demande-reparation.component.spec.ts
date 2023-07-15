import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeReparationComponent } from './demande-reparation.component';

describe('DemandeReparationComponent', () => {
  let component: DemandeReparationComponent;
  let fixture: ComponentFixture<DemandeReparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeReparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeReparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
