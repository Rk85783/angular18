import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero | undefined>;
  queryParam!: string | null;
  fragment!: string | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.hero$ = this.service.getHero(heroId);

    // Query Param
    this.queryParam = this.route.snapshot.queryParamMap.get('ref');

    // Fragment
    this.fragment = this.route.snapshot.fragment;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
