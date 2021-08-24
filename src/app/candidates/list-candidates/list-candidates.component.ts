import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CandidateFacade } from 'src/app/store/candidates/candidates-facade.service';
import { CandidateState } from 'src/app/store/candidates/candidates.state.service';
import { Candidate } from '../candidate';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.scss'],
})
export class ListCandidatesComponent implements OnInit {
  @Select(CandidateState.candidates)
  public candidates$: Observable<Candidate[]>;

  constructor(private candidateFacade: CandidateFacade) {}

  ngOnInit(): void {
    this.candidateFacade.getAll();
  }

  public removeCandidate(id: number): void {
    this.candidateFacade.removeCandidate(id);
  }
}
