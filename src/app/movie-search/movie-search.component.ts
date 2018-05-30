import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
  filter,
  tap
} from 'rxjs/operators';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-search',
  template: `
    <div [formGroup]="searchForm">
      <mdc-text-field  #searchInput formControlName="search" label="Search"
            placeholder="Search Movie" [fullwidth]="true"></mdc-text-field>
    </div>
    <div *ngIf="loading">Loading</div>
    <mdc-list *ngFor="let movie of movies$ | async">
      <mdc-list-item>{{movie.title}}</mdc-list-item>
    </mdc-list>
  `,
  styles: []
})
export class MovieSearchComponent implements OnInit {
  movies$: Observable<Movie[]>;
  searchForm: FormGroup;
  loading = false;

  constructor(private movieService: MoviesService) {
    this.searchForm = new FormGroup({
      search: new FormControl(
        { value: '', disabled: false },
        Validators.required
      )
    });
  }

  ngOnInit(): void {
    this.movies$ = this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(200),
      filter(text => text.length > 2),
      distinctUntilChanged(),
      tap(() => (this.loading = true)),
      switchMap((term: string) => this.movieService.search(term)),
      tap(() => (this.loading = false))
    );
  }
}
