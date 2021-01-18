import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';

import { CandidatesComponent } from './candidates.component';
import { CreateCandidatesComponent } from './create-candidates/create-candidates.component';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';
import { CandidatesEffects } from './state/candidates.effects';
import { candidatesReducer } from './state/candidates.reducer';

@NgModule({
  declarations: [
    CandidatesComponent,
    CreateCandidatesComponent,
    ListCandidatesComponent,
  ],
  exports: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature('candidates', candidatesReducer),
    EffectsModule.forFeature([CandidatesEffects]),
  ],
  providers: [],
})
export class CandidatesModule {}
