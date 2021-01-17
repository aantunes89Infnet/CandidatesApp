import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidateFacade } from 'src/app/store/candidates/candidates-facade.service';
import { CandidatesService } from '../candidates-service.service';

@Component({
  selector: 'app-create-candidates',
  templateUrl: './create-candidates.component.html',
  styleUrls: ['./create-candidates.component.scss'],
})
export class CreateCandidatesComponent implements OnInit {
  CreateCandidateForm: FormGroup;

  constructor(
    private candidateFacade: CandidateFacade,
    private router: Router
  ) {}

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
    this.candidateFacade.addCandidate({
      name: this.CreateCandidateForm.get('name').value,
      grade: this.CreateCandidateForm.get('grade').value,
    });
  }

  private routeToList(): void {
    this.router.navigateByUrl('candidates/list');
  }
}
