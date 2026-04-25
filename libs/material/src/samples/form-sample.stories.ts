import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { applicationConfig, type Meta, type StoryObj } from '@storybook/angular';
import { FormSampleComponent } from './form-sample';

const meta: Meta<FormSampleComponent> = {
  component: FormSampleComponent,
  title: 'Input/Samples',
  decorators: [
    applicationConfig({
      providers: [
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: 'outline',
            color: 'primary',
            floatLabel: 'auto',
            hideRequiredMarker: false,
          } as MatFormFieldDefaultOptions
        },
        {
          provide: ErrorStateMatcher,
          useValue: {
            isErrorState(control?: FormControl) {
              const invalid = !!(control?.invalid)
              const isTouched = !!(control?.touched) || !!(control?.dirty);
              return invalid && isTouched
            }
          } as ErrorStateMatcher
        }
      ]
    })
  ]
};
export default meta;

type Story = StoryObj<FormSampleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvas }) => {
    // await expect(canvas.getByText(/form-sample/gi)).toBeTruthy();
  },
};
