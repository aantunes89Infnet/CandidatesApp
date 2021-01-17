import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { Candidate } from 'src/app/candidates/candidate';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CandidatesRepository {
  public BASE_URL = environment.jsonServerAPI;

  public firstInteraction: boolean = false;

  public placeHolderList: Candidate[] = [
    { name: 'Maria', grade: 10 },
    { name: 'João', grade: 8 },
    { name: 'André', grade: 9 },
    { name: 'Mayara', grade: 9 },
  ];

  constructor(private ngxsStore: Store) {}

  public store(candidates: Candidate[]) {
    localStorage.setItem('candidates', JSON.stringify(candidates));
    this.firstInteraction = true;
  }

  public getAll(): Observable<Candidate[]> {
    // this.setupInitialList();
    return of(JSON.parse(localStorage.getItem('candidates')));
  }

  public remove(id: number): Observable<boolean> {
    const {
      candidatesState: { candidates },
    } = this.ngxsStore.snapshot();

    const newCandidatesList = candidates.filter(
      (candidate, index) => index !== id
    );
    this.store(newCandidatesList);

    return of(newCandidatesList[id] ? false : true);
  }

  public addCandidate(candidate: Candidate): Observable<Candidate> {
    const {
      candidatesState: { candidates },
    } = this.ngxsStore.snapshot();

    const newCandidatesList = [...candidates, candidate];
    this.store(newCandidatesList);

    return of(newCandidatesList.length > candidates.length ? candidate : null);
  }

  public setupInitialList() {
    const candidates = JSON.parse(localStorage.getItem('candidates'));
    const firstUse = JSON.parse(localStorage.getItem('firstUse'));
    if (!candidates && !firstUse) {
      console.log(1);
      localStorage.setItem('candidates', JSON.stringify(this.placeHolderList));
      localStorage.setItem('firstUse', 'firstUse');
    }
  }
}
