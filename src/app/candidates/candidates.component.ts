import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates',
  templateUrl: 'candidates.component.html',
  styleUrls: ['candidates.component.scss'],
})
export class CandidatesComponent implements OnInit {
  public addCandidateForm: boolean = false;

  constructor() {}

  ngOnInit() {}

  displayForm() {
    this.addCandidateForm = true;
  }

  displayList() {
    this.addCandidateForm = false;
  }
}
