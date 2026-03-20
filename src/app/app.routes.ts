import { Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';

export const routes: Routes = [
    { path: 'hero', component: HeroListComponent },
    { path: 'hero/:id', component: HeroDetailComponent },
];
