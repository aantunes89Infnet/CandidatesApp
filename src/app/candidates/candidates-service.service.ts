import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CandidatesRepository } from '../shared/services/candidates.repository';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root',
})
export class CandidatesService {
  public candidates: Candidate[] = [];

  public castCandidates = new BehaviorSubject([]);
  public candidates$ = this.castCandidates.asObservable();

  public placeHolderList: Candidate[] = [
    { name: 'Maria', grade: 10 },
    { name: 'João', grade: 8 },
    { name: 'André', grade: 9 },
    { name: 'Mayara', grade: 9 },
  ];

  constructor(private candidatesRepository: CandidatesRepository) {}

  public addCandidate(candidate: Candidate): void {
    this.candidates.push(candidate);
    this.candidatesRepository.store(this.candidates);
    this.castCandidates.next(this.candidates);
  }

  public getAll() {
    // this.candidates = this.candidatesRepository.getAll();
    this.castCandidates.next(this.candidates);
  }

  public removeCandidate(id: number) {
    this.candidates = this.candidates.filter((el, index) => index !== id);
    localStorage.setItem('candidates', JSON.stringify(this.candidates));
    this.castCandidates.next(this.candidates);
  }
}
