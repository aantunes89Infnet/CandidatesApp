import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CandidatesService } from '../candidates-service.service';
import * as CandidatesActions from './candidates.actions';

@Injectable()
export class CandidatesEffects {
  constructor(
    private actions$: Actions,
    private candidatesService: CandidatesService
  ) {}

  candidates$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CandidatesActions.getCandidates),
      mergeMap((action) =>
        this.candidatesService.getAll().pipe(
          map((candidates) => {
            console.log(candidates);
            return CandidatesActions.getCandidatesSuccess({ candidates });
          }),
          catchError((error) => of(error))
        )
      )
    );
  });

  removeCandidate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CandidatesActions.removeCandidate),
      mergeMap((action) => {
        return this.candidatesService.removeCandidate(action.candidateId).pipe(
          map(() =>
            CandidatesActions.removeCandidateSucces({
              candidateId: action.candidateId,
            })
          ),
          catchError((error) => of(error))
        );
      })
    );
  });

  addCandidate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CandidatesActions.addCandidate),
      mergeMap((action) => {
        return this.candidatesService.addCandidate(action.candidate).pipe(
          map((candidate) =>
            CandidatesActions.addCandidateSuccess({ candidate })
          ),
          catchError((error) => of(error))
        );
      })
    );
  });
}
