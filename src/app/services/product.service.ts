import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class ProductService {

  apiUrl = 'http://localhost:4000/api/products'

  constructor(private http: HttpClient) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl)
  }

  create(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiUrl, data)
  }

  buy(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(`http://localhost:4000/api/products/buy`, data)
  }

  buy_product(): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:4000/api/products/buy/get`)
  }

  get(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  update(id: number, data: any): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, data)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

}