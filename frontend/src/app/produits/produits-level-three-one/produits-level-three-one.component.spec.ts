import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsLevelThreeOneComponent } from './produits-level-three-one.component';

describe('ProduitsLevelThreeOneComponent', () => {
  let component: ProduitsLevelThreeOneComponent;
  let fixture: ComponentFixture<ProduitsLevelThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsLevelThreeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsLevelThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
