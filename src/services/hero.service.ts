import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../data/mock-heroes';
import { Hero } from '../models/hero';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    getHeroes(): Observable<Hero[]> {
        return of(HEROES);
    }

    getHero(id: string | null): Observable<Hero | undefined> {
        const hero = HEROES.find(h => h.id === Number(id));
        return of(hero);
    }
}