import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CandidatesRepository } from '../shared/services/candidates.repository';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  public candidates: Candidate[] = [];

  constructor(private candidatesRepository: CandidatesRepository) {}

  public addCandidate(candidate: Candidate): Observable<Candidate> {
    return this.candidatesRepository.add(candidate);
  }

  public getAll(): Observable<Candidate[]> {
    return this.candidatesRepository.getAll();
  }

  public removeCandidate(id: number): Observable<{}> {
    return this.candidatesRepository.remove(id);
  }
}
