import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { sortBy } from 'lodash';
import { PageEvent } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BuyProductComponent } from '../buy-product/buy-product.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  AllDetails: Product[] = [];
  currentPage = 1;
  searchControl = new FormControl();
  pageSize = 3;
  pageSizeOptions: number[] = [1, 3, 5, 8, 10];
  pageEvent: PageEvent = new PageEvent;

  header = [
    { title: "id" },
    { title: "title" },
    { title: "image" },
    { title: "price" },
    { title: "details" },
    { title: "edit" },
    { title: "delete" },
  ]
  activePageDataChunk: any = []

  constructor(private productService: ProductService,
    private modalService: NgbModal,) {
    this.activePageDataChunk = this.products.slice(0, this.pageSize);
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe(val => {
      console.log('val: ', val);
      if (val) {
        let dataArr = this.AllDetails.filter(i => i.title.toLowerCase().includes(val.toLowerCase()));
        this.activePageDataChunk = dataArr
        console.log('dataArr: ', dataArr);
      }
      if (val === null || val === '') {
        this.activePageDataChunk = this.AllDetails
        console.log('this.products: ', this.products);
      }
    })
    this.click()
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    console.log('this.pageSizeOptions: ', this.pageSizeOptions);
  }

  onPageChanged(e: any) {
    console.log('e: ', e);
    this.click()
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.products.slice(firstCut, secondCut);
    console.log('this.activePageDataChunk: ', this.activePageDataChunk);
  }

  click() {
    this.productService.all().subscribe(
      product => {
        console.log('product: ', product);
        this.products = product
        this.products.forEach(k => {
          k.id = k._id
        })
        this.AllDetails = this.products
      }
    )
  }

  tcurrentPage(e: any) {
    console.log('e: ', e);
    this.click()
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.products.length / 5);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }

  productDel(_id: number): void {
    this.productService.delete(_id).subscribe(
      () => {
        this.products = this.products.filter(p => p.id !== _id);
        console.log('_id: ', _id);
        console.log('this.products: ', this.products);
      }
    )
  }

  async openBuyProduct() {
    const modalRef = this.modalService.open(BuyProductComponent)
  }



}