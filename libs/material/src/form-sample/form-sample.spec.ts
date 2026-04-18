import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSampleComponent } from './form-sample';

describe('FormSampleComponent', () => {
  let component: FormSampleComponent;
  let fixture: ComponentFixture<FormSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSampleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
