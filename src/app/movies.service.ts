import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor() {}

  search(term): Observable<Movie[]> {
    // fake async response
    return of([{ title: 'Foo' }, { title: 'Bar' }]).pipe(delay(200));
  }
}
