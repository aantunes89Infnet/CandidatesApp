import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, CommonModule, RouterModule, HttpClientModule],
  exports: [MaterialModule, CommonModule, RouterModule, HttpClientModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}
