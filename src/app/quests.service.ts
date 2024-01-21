import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestsService {

  constructor(private http: HttpClient) { }

  getActiveQuest(): Observable<any>{
    return this.http.get("https://questifyme-backend.fly.dev/quests/active")
  }

  getLast5Quests(): Observable<any>{
    return this.http.get("https://questifyme-backend.fly.dev/quests/last_five")
  }
}
