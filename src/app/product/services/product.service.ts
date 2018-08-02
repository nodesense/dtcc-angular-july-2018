import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { Brand } from '../models/brand';

import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

console.log('ENV ', environment);

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>( environment.apiEndPoint + '/api/products');
  }


  searchProducts(q: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api/products?q=${q}`);
  }

  getBrands(): Observable<Brand[]> {

    const storage = window.localStorage;

    const brandsCache = storage.getItem('brands');
    if (brandsCache) {
      console.log('serving from cache ');
      const brands = JSON.parse(brandsCache);
      return  of(brands); // convert array to observable<array>
    }
    
    console.log('serving from server');

    // implement cache storage
    return this.http
                .get<Brand[]> (environment.apiEndPoint + '/api/brands')
                .pipe(map (brands => {
                  // TODO: store to localStorage
                  storage.setItem('brands', JSON.stringify(brands));
                  return brands;
                }));
  }

  deleteProduct(id: number): Observable<any> {
    console.log('deleting product ', id);
    return this.http.delete(environment.apiEndPoint + '/api/products/' + id);
  }

  getProduct(id: number): Observable<Product> { 
    return this.http.get<Product>(environment.apiEndPoint + '/api/products/' + id);
  }

  saveProduct(product: Product): Observable<Product> {
    if (product.id) { // Put/update
      // PUT /api/products/123
      // {{data as json}}
      // returns updated product object
       return this.http.put<Product> (environment.apiEndPoint +  '/api/products/' + product.id,
                                      product
                                      );
    }

    // POST /api/products
    // {{data as json}}
    // returns updated product object but with id
    // else post/create
    return this.http.post<Product> (environment.apiEndPoint +  '/api/products',
    product
    );
  }

}
