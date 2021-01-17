import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { catchError, mergeMap, tap } from 'rxjs/operators';
import { CandidatesRepository } from 'src/app/shared/services/candidates.repository';
import { Candidate } from '../../candidates/candidate';
import {
  AddCandidate,
  AddCandidateSuccess,
  GetCandidateList,
  GetCandidateListSucces,
  RemoveCandidate,
  RemoveCandidateSuccess,
} from './candidates.actions';

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

  @Action(GetCandidateList)
  getCandidates(
    stateContext: StateContext<CandidateStateModel>,
    action: GetCandidateList
  ) {
    return this.candidatesRepository
      .getAll()
      .pipe(
        mergeMap((candidates) =>
          stateContext.dispatch(new GetCandidateListSucces(candidates))
        )
      );
  }

  @Action(GetCandidateListSucces)
  getCandidatesSucces(
    ctx: StateContext<CandidateStateModel>,
    { candidates }: GetCandidateListSucces
  ) {
    const state = ctx.getState();

    const current = { candidates };

    ctx.setState({
      ...state,
      ...current,
    });
  }

  @Action(AddCandidate)
  addCandidate(
    stateContext: StateContext<CandidateStateModel>,
    { candidate }: AddCandidate
  ) {
    return this.candidatesRepository.addCandidate(candidate).pipe(
      mergeMap((responseCandidate) =>
        stateContext.dispatch(new AddCandidateSuccess(responseCandidate))
      ),
      catchError((err) => {
        console.log(err);
        return err;
      })
    );
  }

  @Action(AddCandidateSuccess)
  addCandidateSuccess(
    { patchState, getState }: StateContext<CandidateStateModel>,
    { candidate }: AddCandidate
  ) {
    console.log('triggerado 2');
    const { candidates } = getState();
    patchState({ candidates: [...candidates, candidate] });
  }

  @Action(RemoveCandidate) // watcher
  removeCandidate(
    stateContext: StateContext<CandidateStateModel>,
    { candidateId }: RemoveCandidate
  ) {
    return this.candidatesRepository.remove(candidateId).pipe(
      mergeMap(() => {
        return stateContext.dispatch(new RemoveCandidateSuccess(candidateId));
      })
    );
  }

  @Action(RemoveCandidateSuccess)
  removeCandidateSuccess(
    { getState, patchState }: StateContext<CandidateStateModel>,
    { candidateId }: RemoveCandidateSuccess
  ) {
    const { candidates } = getState();
    const newListOfCandidates = candidates.filter(
      (candidate, index) => index !== candidateId
    );
    patchState({ candidates: newListOfCandidates });
  }
}
