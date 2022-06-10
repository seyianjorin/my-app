import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeFormComponent } from './update-employee-form.component';

describe('UpdateEmployeeFormComponent', () => {
  let component: UpdateEmployeeFormComponent;
  let fixture: ComponentFixture<UpdateEmployeeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
