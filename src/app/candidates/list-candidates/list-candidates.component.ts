import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Candidate } from '../candidate';
import { getCandidatesSelector } from '../state/candidates.reducer';
import * as CandidatesActions from '../state/candidates.actions';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.scss'],
})
export class ListCandidatesComponent implements OnInit {
  public candidates$: Observable<Candidate[]>;
  1;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(CandidatesActions.getCandidates());
    this.candidates$ = this.store.select(getCandidatesSelector);
  }

  public removeCandidate(candidateId: number) {
    this.store.dispatch(CandidatesActions.removeCandidate({ candidateId }));
  }
}
