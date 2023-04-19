import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { OneComponent } from '../one/one.component';
import { Router } from '@angular/router';
import { HistoryComponent } from '../history/history.component';
import { OpenImageComponent } from '../open-image/open-image.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {

  products: Product[] = []
  AllDetails: Product[] = [];
  currentPage = 1;
  searchControl = new FormControl();
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  pageEvent: PageEvent = new PageEvent;
  header = [
    { title: "id" },
    { title: "title" },
    { title: "image" },
    { title: "price" },
    { title: "details" },
    { title: "buy" },
  ]
  activePageDataChunk: any = []
  arr: any[] = [];
  obj: any;
  arrr: any;

  constructor(private productService: ProductService,
    private modalService: NgbModal,
    private router: Router) {
    this.activePageDataChunk = this.products.slice(0, this.pageSize);
  }

  ngOnInit(): void {
    this.click()
    this.searchControl.valueChanges.subscribe(val => {
      console.log('val: ', val);
      if (val) {
        let dataArr = this.AllDetails.filter(i => i.title.toLowerCase().includes(val.toLowerCase()));
        this.activePageDataChunk = dataArr
        console.log('dataArr: ', dataArr);
      }
      if (val === null || val === '') {
        this.activePageDataChunk = this.AllDetails
      }
    })
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    console.log('this.pageSizeOptions: ', this.pageSizeOptions);
  }

  onPageChanged(e: any) {
    let firstCut = e.pageIndex * e.pageSize;
    let secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.products.slice(firstCut, secondCut);
  }

  click() {
    this.productService.all().subscribe(
      product => {
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
  }

  get pages(): number[] {
    const pageCount = Math.ceil(this.products.length / 10);
    return Array(pageCount).fill(0).map((x, i) => i + 1);
  }

  async open(e: any) {
    console.log('e: ', e);
    const modalRef = this.modalService.open(OneComponent)
    let addedData: any
    this.activePageDataChunk.forEach((data: { id: any; }, index: any) => {
      if (index == e) {
        addedData = data;
        modalRef.componentInstance.id = data.id;
      }
      modalRef.componentInstance.mainData = this.activePageDataChunk;
    })

    let result: any = await modalRef.result.catch(err => console.log(err))
    console.log('result: ', result);
    if (result) {
      this.arrr = [result]
      console.log('this.arrr: ', this.arrr);
      for (let index = 0; index < this.arrr.length; index++) {
        const element = this.arrr[index];
        this.obj = {
          image: element.pData.image,
          title: element.pData.title,
          price: element.pData.price,
          firstname: element.formValue.firstName,
          lastname: element.formValue.lastName,
          mobileno: element.formValue.mobile_number,
          address: element.formValue.address
        }
        console.log('this.obj: ', this.obj);
        this.productService.buy(this.obj).subscribe(
          () => {
            this.router.navigate(['/user/sale'])
          }
        )
      }
    }
  }

  async openhistory() {
    const modalRef = this.modalService.open(HistoryComponent)
    let his = [this.obj]
    modalRef.componentInstance.data = his;
  }

  async image_open(e: any) {
    console.log('e: ', e);
    const modalRef = this.modalService.open(OpenImageComponent)
    let addedData: any
    this.activePageDataChunk.forEach((data: { id: any; }, index: any) => {
      if (index == e) {
        addedData = data;
        modalRef.componentInstance.id = data.id;
      }
      modalRef.componentInstance.mainData = this.activePageDataChunk;
    })
  }

}