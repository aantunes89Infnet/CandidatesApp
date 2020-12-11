import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatesComponent } from './candidates/candidates.component';
import { CreateCandidatesComponent } from './candidates/create-candidates/create-candidates.component';
import { ListCandidatesComponent } from './candidates/list-candidates/list-candidates.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'candidates',
    component: CandidatesComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ListCandidatesComponent },
      { path: 'create', component: CreateCandidatesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
