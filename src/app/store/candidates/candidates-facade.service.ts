import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/candidates/candidate';
import {
  AddCandidate,
  GetCandidateList,
  RemoveCandidate,
} from './candidates.actions';
import { CandidateState } from './candidates.state';

@Injectable({ providedIn: 'root' })
export class CandidateFacade {
  @Select(CandidateState.candidates)
  public candidates$: Observable<Candidate[]>;

  @Dispatch()
  public getAll() {
    return new GetCandidateList();
  }

  @Dispatch()
  public addCandidate(candidate: Candidate) {
    return new AddCandidate(candidate);
  }

  @Dispatch()
  public removeCandidate(candidateId: number) {
    return new RemoveCandidate(candidateId);
  }
}
