import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, FormBuilder} from '@angular/forms';

import {map, filter, debounceTime, tap} from 'rxjs/operators';

import { Product } from '../../models/product';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  formGroup: FormGroup;
  searchControl: FormControl; // input 

  products$: Observable<Product[]>;

  constructor(private builder: FormBuilder, 
             private productService: ProductService) { 
     this.searchControl = new FormControl();

     this.formGroup = builder.group({
       'searchBox': this.searchControl
     });
  }

  ngOnInit() {
    this.searchControl.valueChanges
                     .pipe(map (value => value.trim())) // remove spaces around
                     .pipe ( tap (value => {
                       if (value.length <= 1) {
                        this.products$  = of([]);
                       }
                       return value;
                     }))
                     .pipe(filter (value => value.length >= 2) ) // if condition true, goes down
                     .pipe(debounceTime(600))
                     .subscribe( value => {
                          console.log('**' + value + '**');

                          this.products$ = this.productService.searchProducts(value);
                      });
  }

}
