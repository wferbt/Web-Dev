import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { appConfig } from './app.config';

export const config: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    ...(appConfig.providers ?? []),
  ],
};