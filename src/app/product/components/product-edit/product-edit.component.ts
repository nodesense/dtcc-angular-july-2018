import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';

import {Router,
        ActivatedRoute // to read url parameters, id
} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Brand } from '../../models/brand';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  // get access to directive instance
  // <form  #productForm="ngForm" ..
  @ViewChild('productForm')
  form: NgForm;

  product: Product = new Product(); // create use case

  brands$: Observable<Brand[]>;

  constructor(private router: Router,
             private route: ActivatedRoute,
             private productService: ProductService) { 
             }

  ngOnInit() {
    // read id from url
    const id = this.route.snapshot.params['id'];
    console.log('ID ', id);

    if (id) {
      this.productService.getProduct(id)
                         .subscribe ( product => {
                             this.product = product;
                         });
    }

    this.brands$ = this.productService.getBrands();


    this.form.valueChanges
             .subscribe ( values => {
               console.log('Values ', values);
             });

  }

  gotoList() {
     this.router.navigateByUrl('/products/list');
    //  this.router.navigate(['/', 'products', 'list']);
  }

  saveProduct() {

    if (this.form.pristine) {
      alert('No form changes, no save');
      return;
    }

    this.productService.saveProduct(this.product)
                       .subscribe ( savedProduct => {
                          // option 1: continue working on same form
                          this.product = savedProduct;

                          // option 2: go to list/other page
                          this.gotoList();
                       });
  }

}
