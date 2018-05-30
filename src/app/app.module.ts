import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDCModule } from './mdc.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
  ],
  imports: [
    BrowserModule,
    MDCModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
