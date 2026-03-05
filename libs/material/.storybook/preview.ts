import { provideRouter } from '@angular/router';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { applicationConfig, type Preview } from '@storybook/angular';
import docJson from '../documentation.json';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';

setCompodocJson(docJson);

const preview: Preview = {

  decorators: [

    applicationConfig({
      providers: [

        provideRouter([]),
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: "outline",

          } as MatFormFieldDefaultOptions
        }
      ],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*|^.*Change$' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        text: /(name|description)$/i,
        number: /(count|price|cost|id)$/i,
        checkbox: /^is.*/,
        radio: /options$/i,
      },
    },
  }
};

export default preview;
