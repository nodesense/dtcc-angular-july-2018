import { HighlightDirective } from './directives/highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      LikeComponent,
      HighlightDirective,
      PowerPipe,
      FilterPipe,
      SortPipe],

  exports: [ // ensure other modules can use component, directive, pipes
      LikeComponent,
      HighlightDirective,
      PowerPipe,
      FilterPipe,
      SortPipe
  ]
})
export class SharedModule { }
