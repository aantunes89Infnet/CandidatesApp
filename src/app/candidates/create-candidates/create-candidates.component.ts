import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as CandidatesActions from '../state/candidates.actions';

@Component({
  selector: 'app-create-candidates',
  templateUrl: './create-candidates.component.html',
  styleUrls: ['./create-candidates.component.scss'],
})
export class CreateCandidatesComponent implements OnInit {
  CreateCandidateForm: FormGroup;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.CreateCandidateForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      grade: new FormControl(null, [Validators.required]),
    });
  }

  public onSubmit(e: Event): void {
    e.preventDefault();
    if (this.CreateCandidateForm.valid) {
      this.persistCandidate();
      this.routeToList();
    }
  }

  private persistCandidate(): void {
    const candidate = {
      name: this.CreateCandidateForm.get('name').value,
      grade: this.CreateCandidateForm.get('grade').value,
    };

    this.store.dispatch(CandidatesActions.addCandidate({ candidate }));
  }

  private routeToList(): void {
    this.router.navigateByUrl('candidates/list');
  }
}
