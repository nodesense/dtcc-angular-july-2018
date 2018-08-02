import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>('http://localhost:7070/api/products');
  }

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]> ('http://localhost:7070/api/brands');
  }

  deleteProduct(id: number): Observable<any> {
    console.log('deleting product ', id);
    return this.http.delete('http://localhost:7070/api/products/' + id);
  }

  getProduct(id: number): Observable<Product> { 
    return this.http.get<Product>('http://localhost:7070/api/products/' + id);
  }

  saveProduct(product: Product): Observable<Product> {
    if (product.id) { // Put/update
      // PUT /api/products/123
      // {{data as json}}
      // returns updated product object
       return this.http.put<Product> ('http://localhost:7070/api/products/' + product.id,
                                      product
                                      );
    }

    // POST /api/products
    // {{data as json}}
    // returns updated product object but with id
    // else post/create
    return this.http.post<Product> ('http://localhost:7070/api/products',
    product
    );
  }

}
