import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;
  message: string;
  inProgress: string;

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

}
