import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { HEROES } from '../../data/mock-heroes';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {
  heroes$!: Observable<Hero[]>;
  selectedId!: number;
  heroes = HEROES;
  
  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.service.getHeroes();
      })
    );
  }

  goToHero(hero: Hero) {
    this.router.navigate(['/hero', hero.id], {
      queryParams: { ref: 'list' },
      fragment: 'top'
    });
  }
}
