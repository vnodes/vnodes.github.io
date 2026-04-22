import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@vnodes/material/flex';
import { FormComponent } from '@vnodes/material/form';
import { InputNumberComponent } from '@vnodes/material/input-number';
import { InputTextComponent } from '@vnodes/material/input-text';
import { FormSampleComponent } from './form-sample';

describe('FormSampleComponent', () => {
  let component: FormSampleComponent;
  let fixture: ComponentFixture<FormSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormSampleComponent,
        ReactiveFormsModule,
        FormComponent,
        FlexModule,
        InputNumberComponent,
        InputTextComponent
      ],
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(FormSampleComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
