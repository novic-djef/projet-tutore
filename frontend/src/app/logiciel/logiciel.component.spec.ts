import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicielComponent } from './logiciel.component';

describe('LogicielComponent', () => {
  let component: LogicielComponent;
  let fixture: ComponentFixture<LogicielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogicielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
