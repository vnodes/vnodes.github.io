import { provideRouter, RouterModule } from '@angular/router';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { applicationConfig, moduleMetadata, type Preview } from '@storybook/angular';
import docJson from '../documentation.json';

import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

setCompodocJson(docJson);

const preview: Preview = {

  decorators: [
    moduleMetadata({
      imports: [
        RouterModule,
        CommonModule, MatButtonModule,
        MatIconModule, MatFormFieldModule,
        MatDividerModule, MatToolbarModule, MatListModule
      ],
    }),
    applicationConfig({

      providers: [
        provideHttpClient(),
        provideRouter([]),
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: {
            appearance: "outline"
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
  },
};

export default preview;
