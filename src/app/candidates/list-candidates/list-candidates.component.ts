import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../candidate';
import { CandidatesService } from '../candidates-service.service';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.scss'],
})
export class ListCandidatesComponent implements OnInit {
  public candidates$: Observable<Candidate[]>;

  constructor(private candidateService: CandidatesService) {}

  ngOnInit(): void {
    this.candidateService.getAll();
    this.candidates$ = this.candidateService.candidates$;
  }

  public removeCandidate(id: number) {
    this.candidateService.removeCandidate(id);
  }
}
