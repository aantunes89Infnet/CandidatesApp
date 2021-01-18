import { createAction, props } from '@ngrx/store';
import { Candidate } from '../candidate';

export const getCandidates = createAction('[CANDIDATES.API] GET CANDIDATES');

export const getCandidatesSuccess = createAction(
  '[CANDIDATES.API] GET CANDIDATES SUCCESS',
  props<{ candidates: Candidate[] }>()
);

export const removeCandidate = createAction(
  '[CANDIDATES.API] DELETE CANDIDATE',
  props<{ candidateId: number }>()
);

export const removeCandidateSucces = createAction(
  '[CANDIDATES.API] DELETE CANDIDATE SUCCESS',
  props<{ candidateId: number }>()
);

export const addCandidate = createAction(
  '[CANDIDATES.API] ADD CANDIDATE',
  props<{ candidate: Candidate }>()
);

export const addCandidateSuccess = createAction(
  '[CANDIDATES.API] ADD CANDIDATE SUCCESS',
  props<{ candidate: Candidate }>()
);
