import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  getAllShopItems() : Observable<any>{
    return this.http.get("https://questifyme-backend.fly.dev/shops/all");
    }
}
