import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLogicielComponent } from './update-logiciel.component';

describe('UpdateLogicielComponent', () => {
  let component: UpdateLogicielComponent;
  let fixture: ComponentFixture<UpdateLogicielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLogicielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLogicielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
