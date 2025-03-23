import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(mod => mod.AboutComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./services/services.component').then(mod => mod.ServicesComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent)
    }
];
