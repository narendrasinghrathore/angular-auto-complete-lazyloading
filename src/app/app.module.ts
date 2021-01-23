import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AutoCompleteLazyLoading } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [AutoCompleteLazyLoading, InfiniteScrollComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AutoCompleteLazyLoading],
  exports: [AutoCompleteLazyLoading],
})
export class AppModule {}
