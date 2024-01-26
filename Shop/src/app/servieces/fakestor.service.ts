import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakestorService {
  private url = 'https://fakestoreapi.com/products';

  private fiveUrl = 'https://fakestoreapi.com/products?limit=5';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url);
  }
  getFiveProducts(): Observable<any> {
    return this.http.get(this.fiveUrl);
  }
}
