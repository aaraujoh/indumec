import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FilterPipe],
  imports: [
    CommonModule
  ],
  exports:[
    FilterPipe
  ]
})
export class PipesModule { }
