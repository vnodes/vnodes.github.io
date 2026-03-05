/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="@angular/localize" />
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';


async function main() {

    await bootstrapApplication(App, appConfig)


    {
        const browserLang = navigator.language || (navigator as any).userLanguage;
        const supportedLocales = ['es', 'fr', 'ru', 'tr', 'za'];
        const defaultLocale = 'en';
        const targetLocale = supportedLocales.find(locale =>
            browserLang.toLowerCase().startsWith(locale)
        ) || defaultLocale;

        console.log(`Location Path: '${window.location.pathname}'`)

        if (window.location.pathname === '/') {
            window.location.href = window.location.pathname + targetLocale + '/';
        }
    }
}


main()