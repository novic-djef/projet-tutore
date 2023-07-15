import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsLevelThreeTwoComponent } from './produits-level-three-two.component';

describe('ProduitsLevelThreeTwoComponent', () => {
  let component: ProduitsLevelThreeTwoComponent;
  let fixture: ComponentFixture<ProduitsLevelThreeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsLevelThreeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsLevelThreeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
