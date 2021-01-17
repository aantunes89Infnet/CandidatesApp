import { Candidate } from '../../candidates/candidate';

export class GetCandidateList {
  static readonly type = '[CANDIDATE] GET LIST';
}

export class GetCandidateListSucces {
  static readonly type = '[CANDIDATE] GET SUCCESS';
  constructor(public candidates: Candidate[]) {}
}

export class AddCandidate {
  static readonly type = '[CANDIDATE] ADD';
  constructor(public candidate: Candidate) {}
}

export class AddCandidateSuccess {
  static readonly type = '[CANDIDATE] ADD SUCCESS';
  constructor(public candidate: Candidate) {}
}

export class RemoveCandidate {
  static readonly type = '[CANDIDATE] REMOVE';
  constructor(public candidateId: number) {}
}

export class RemoveCandidateSuccess {
  static readonly type = '[CANDIDATE] REMOVE SUCCESS';
  constructor(public candidateId: number) {}
}
