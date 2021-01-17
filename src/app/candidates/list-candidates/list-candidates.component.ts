import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateFacade } from 'src/app/store/candidates/candidates-facade.service';
import { Candidate } from '../candidate';
import { CandidatesService } from '../candidates-service.service';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.scss'],
})
export class ListCandidatesComponent implements OnInit {
  public candidates$: Observable<Candidate[]>;

  constructor(private candidateFacade: CandidateFacade) {}

  ngOnInit(): void {
    this.candidateFacade.getAll();
    this.candidates$ = this.candidateFacade.candidates$;
  }

  public removeCandidate(id: number): void {
    this.candidateFacade.removeCandidate(id);
  }
}
