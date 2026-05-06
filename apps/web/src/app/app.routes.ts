import { Route } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { HomeComponent } from './pages/home/home';
import { ServiceComponent } from './pages/service/service';

export const appRoutes: Route[] = [

    {
        path: '',
        redirectTo: "home"
    },
    {
        path: "home",
        loadComponent() {
            return HomeComponent
        },
        title: "Home"
    },
    {
        path: 'about',
        loadComponent() {
            return AboutComponent
        },
        title: "About"
    },
    {
        path: 'service',
        loadComponent() {
            return ServiceComponent
        },
        title: "Service"
    },
];
