import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { mergeMap, tap } from 'rxjs/operators';
import { CandidatesRepository } from 'src/app/core/services/candidates-repository.service';
import { Candidate } from '../../candidates/candidate';
import * as Actions from './candidates.actions';

export interface CandidateStateModel {
  candidates: Candidate[];
}

const initialState: CandidateStateModel = {
  candidates: [],
};

@State<CandidateStateModel>({
  name: 'candidatesState',
  defaults: initialState,
})
@Injectable()
export class CandidateState {
  constructor(private candidatesRepository: CandidatesRepository) {}

  @Selector()
  public static candidates(state: CandidateStateModel): Candidate[] {
    return state.candidates;
  }

  @Action(Actions.GetCandidateList)
  getCandidates(
    { patchState }: StateContext<CandidateStateModel>,
    action: Actions.GetCandidateList
  ) {
    return this.candidatesRepository
      .getAll()
      .pipe(tap((candidates) => patchState({ candidates })));
  }

  @Action(Actions.AddCandidate)
  addCandidate(
    stateContext: StateContext<CandidateStateModel>,
    { candidate }: Actions.AddCandidate
  ) {
    return this.candidatesRepository
      .addCandidate(candidate)
      .pipe(
        mergeMap((responseCandidate) =>
          stateContext.dispatch(new Actions.AddCandidateSuccess(responseCandidate))
        )
      );
  }

  @Action(Actions.AddCandidateSuccess)
  addCandidateSuccess(
    { patchState, getState }: StateContext<CandidateStateModel>,
    { candidate }: Actions.AddCandidate
  ) {
    console.log('triggerado 2');
    const { candidates } = getState();
    patchState({ candidates: [...candidates, candidate] });
  }

  @Action(Actions.RemoveCandidate) // watcher
  removeCandidate(
    stateContext: StateContext<CandidateStateModel>,
    { candidateId }: Actions.RemoveCandidate
  ) {
    return this.candidatesRepository.remove(candidateId).pipe(
      mergeMap(() => {
        return stateContext.dispatch(new Actions.RemoveCandidateSuccess(candidateId));
      })
    );
  }

  @Action(Actions.RemoveCandidateSuccess)
  removeCandidateSuccess(
    { getState, patchState }: StateContext<CandidateStateModel>,
    { candidateId }: Actions.RemoveCandidateSuccess
  ) {
    const { candidates } = getState();
    const newListOfCandidates = candidates.filter(
      ({ id }) => id !== candidateId
    );
    patchState({ candidates: newListOfCandidates });
  }
}
