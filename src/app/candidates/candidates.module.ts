import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';
import { CandidateFacade } from '../store/candidates/candidates-facade.service';
import { CandidateState } from '../store/candidates/candidates.state';

import { CandidatesComponent } from './candidates.component';
import { CreateCandidatesComponent } from './create-candidates/create-candidates.component';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    NgxsModule.forFeature([CandidateState]),
  ],
  exports: [],
  declarations: [
    CandidatesComponent,
    CreateCandidatesComponent,
    ListCandidatesComponent,
  ],
  providers: [],
})
export class CandidatesModule {}
