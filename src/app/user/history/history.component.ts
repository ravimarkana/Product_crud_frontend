import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input()
  data: any;

  header = [
    { title: "Image" },
    { title: "Name" },
    { title: "Price" },
    { title: "Mobile" },
    { title: "Address" }
  ]

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    console.log('this.data: ', this.data);

  }

}
