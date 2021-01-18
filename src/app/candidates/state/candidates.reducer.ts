import {
  createReducer,
  on,
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import { Candidate } from '../candidate';
import * as CandidatesActions from './candidates.actions';
import * as AppState from '../../state/app.state';

export interface CandidatesState {
  candidates: Candidate[];
}

export interface State extends AppState.State {
  candidatesState: CandidatesState;
}

const initialState: CandidatesState = {
  candidates: [],
};

const getCandidatesFeatureState = createFeatureSelector<CandidatesState>(
  'candidates'
);

export const getCandidatesSelector = createSelector(
  getCandidatesFeatureState,
  (state) => state.candidates
);

export const candidatesReducer = createReducer<CandidatesState>(
  initialState,
  on(
    CandidatesActions.getCandidatesSuccess,
    (state, action): CandidatesState => {
      return {
        ...state,
        candidates: action.candidates,
      };
    }
  ),
  on(
    CandidatesActions.removeCandidateSucces,
    (state, action): CandidatesState => {
      return {
        ...state,
        candidates: state.candidates.filter(
          (candidate) => candidate.id !== action.candidateId
        ),
      };
    }
  ),
  on(
    CandidatesActions.addCandidateSuccess,
    (state, action): CandidatesState => {
      return {
        ...state,
        candidates: [...state.candidates, action.candidate],
      };
    }
  )
);
