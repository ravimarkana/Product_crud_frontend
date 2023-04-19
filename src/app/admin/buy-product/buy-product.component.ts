import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss']
})
export class BuyProductComponent implements OnInit {

  products: any;
  header = [
    { title: "Image" },
    { title: "Name" },
    { title: "Price" },
    { title: "Mobile" },
    { title: "Address" }
  ]

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.clicked()
  }

  clicked() {
    this.productService.buy_product().subscribe(
      product => {
        console.log('product: ', product);
        this.products = product
        
      }
    )
  }

}
