import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRapportComponent } from './liste-rapport.component';

describe('ListeRapportComponent', () => {
  let component: ListeRapportComponent;
  let fixture: ComponentFixture<ListeRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
