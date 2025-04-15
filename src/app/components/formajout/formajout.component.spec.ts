import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormajoutComponent } from './formajout.component';

describe('FormajoutComponent', () => {
  let component: FormajoutComponent;
  let fixture: ComponentFixture<FormajoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormajoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormajoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
