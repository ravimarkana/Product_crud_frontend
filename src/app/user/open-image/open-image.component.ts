import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'app-open-image',
  templateUrl: './open-image.component.html',
  styleUrls: ['./open-image.component.css']
})
export class OpenImageComponent {
  @Input()
  id: any;

  @Input()
  mainData: any;

  all: any;

  constructor(public activeModal: NgbActiveModal) {

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

}
