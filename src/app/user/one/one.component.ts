import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryComponent } from '../history/history.component';
import { UserDetailsComponent } from '../user-details/user-details.component';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {

  @Input()
  id: any;

  @Input()
  mainData: any;

  all: any;
  requests: any;
  Arr: any[] = [];


  constructor(public activeModal: NgbActiveModal,
    private modalService: NgbModal) {

  }


  ngOnInit(): void {
    console.log('id: ', this.id);
    console.log('this.mainData: ', this.mainData);
    this.dtas()
  }

  closemodal() {
    this.activeModal.close(true);
  }

  dtas() {
    this.mainData.forEach((k: any) => {
      if (k.id == this.id) {
        this.all = k;
      }
    })
  }

  addhistory() {
    if (this.Arr && this.Arr.length) {
      console.log('this.all: ', this.all);
      this.Arr = [...this.Arr, { ...this.all }]
    } else {
      this.Arr.push(this.all)
    }
    console.log('this.Arr: ', this.Arr);
  }

  async openmodal(e: any) {
    const modalRef = this.modalService.open(UserDetailsComponent)
    modalRef.componentInstance.productData = this.all;
    let newData = await modalRef.result;
    if (newData) {
      this.activeModal.close(newData);
    }
  }

}
