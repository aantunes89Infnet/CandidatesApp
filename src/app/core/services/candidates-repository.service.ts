import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from 'src/app/candidates/candidate';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CandidatesRepository {
  public readonly BASE_URL = `${environment.jsonServerAPI}/candidates`;

  public firstInteraction: boolean = false;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.BASE_URL);
  }

  public remove(id: number): Observable<{}> {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }

  public addCandidate(candidate: Candidate): Observable<Candidate> {
    return this.http.post(this.BASE_URL, candidate);
  }
}