import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig, isDevMode,
  provideBrowserGlobalErrorListeners, provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { appRoutes } from './app.routes';
import { proxyInterceptor } from './interceptors/proxy.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(appRoutes, withHashLocation()),
    provideHttpClient(withInterceptors([proxyInterceptor])),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
