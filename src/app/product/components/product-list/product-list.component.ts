import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  message: string;
  inProgress: string;

  counter = 1000; // primitive, by value
  counterList: number[] = []; // reference type

  incr() {
    this.counter++;
    this.counterList.push(this.counter);
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  deleteProduct(id: number) {
    console.log('to delete ', id);
    
    this.inProgress = 'delete in progress';

    this.productService.deleteProduct(id)
                       .subscribe (result => {
                         console.log('product ', id, ' deleted');
                         this.products$ = this.productService.getProducts();
                        
                       },
                       
                       error => {
                         console.error('Product delete error ', error);
                         this.message = `Error in delete ${error.status} ${error.statusText}`;
                         
                         // TODO: clear the error after 3 seconds
                         setInterval( () => {
                            this.message = '';
                         }, 3000);

                         this.inProgress = '';
                       },

                      // complete callback, called after success
                       () => {
                          this.inProgress = '';
                       }
                      
                      );
  }

  getProductName(product: Product) {
    //console.log("Get product name called", product.name);
    return product.name;
  }


  refresh() {
    this.products$ = this.productService.getProducts();
  }

  //TODO: fix
  trackById(index: number, product: Product) {
    //console.log("PID", product.id);
    return product.id;
  }

}
