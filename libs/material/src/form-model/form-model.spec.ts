import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormModelComponent } from './form-model';

describe('FormModelComponent', () => {
  let component: FormModelComponent;
  let fixture: ComponentFixture<FormModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormModelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormModelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
