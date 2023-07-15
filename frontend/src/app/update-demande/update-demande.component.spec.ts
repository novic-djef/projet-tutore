import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDemandeComponent } from './update-demande.component';

describe('UpdateDemandeComponent', () => {
  let component: UpdateDemandeComponent;
  let fixture: ComponentFixture<UpdateDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
