import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMaterielComponent } from './update-materiel.component';

describe('UpdateMaterielComponent', () => {
  let component: UpdateMaterielComponent;
  let fixture: ComponentFixture<UpdateMaterielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMaterielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMaterielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
