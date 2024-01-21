import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any> {
    return this.http.get("https://questifyme-backend.fly.dev/user/get/mrgeraffe");
  }
}
