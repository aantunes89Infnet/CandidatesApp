import { Injectable } from '@angular/core';
import { Candidate } from 'src/app/candidates/candidate';

@Injectable({ providedIn: 'root' })
export class CandidatesRepository {
  public firstInteraction: boolean = false;

  public placeHolderList: Candidate[] = [
    { name: 'Maria', grade: 10 },
    { name: 'João', grade: 8 },
    { name: 'André', grade: 9 },
    { name: 'Mayara', grade: 9 },
  ];

  constructor() {}

  public store(candidates: Candidate[]) {
    localStorage.setItem('candidates', JSON.stringify(candidates));
    this.firstInteraction = true;
  }

  public getAll(): Candidate[] {
    // this.setupInitialList();
    return JSON.parse(localStorage.getItem('candidates'));
  }

  public remove(id: number): void {
    let candidates = this.getAll();
    candidates = candidates.filter((candidate, index) => index !== id);
    this.store(candidates);
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
