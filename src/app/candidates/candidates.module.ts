import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { CandidatesComponent } from './candidates.component';
import { CreateCandidatesComponent } from './create-candidates/create-candidates.component';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SharedModule],
  exports: [],
  declarations: [
    CandidatesComponent,
    CreateCandidatesComponent,
    ListCandidatesComponent,
  ],
  providers: [],
})
export class CandidatesModule {}
