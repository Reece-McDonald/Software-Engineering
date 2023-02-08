import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Resource: 'https://www.udemy.com/course/angular-go-admin/'
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
