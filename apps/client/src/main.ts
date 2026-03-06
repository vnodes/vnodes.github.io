 
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';


async function main() {

    await bootstrapApplication(App, appConfig)

}


main()