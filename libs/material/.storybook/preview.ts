import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { applicationConfig, type Preview } from '@storybook/angular';
import { InputValidator } from '@vnodes/material/validators';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
    tags: ["autodocs"],
    decorators: [
        applicationConfig({

            providers: [
                provideHttpClient(),
                provideRouter([]),
                InputValidator.provideDefault()
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
