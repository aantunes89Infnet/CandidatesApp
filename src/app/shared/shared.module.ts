import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, CommonModule, RouterModule],
  exports: [MaterialModule, CommonModule, RouterModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
