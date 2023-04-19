import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input()
  productData: any;

  frmGroup = new FormGroup({
    lastName: new FormControl('', []),
    firstName: new FormControl('', []),
    mobile_number: new FormControl('', []),
    address: new FormControl('', [])
  })

  constructor(
    public form: FormBuilder,
    public activeModal: NgbActiveModal,
  ) {
  }

  submited() {
    console.log('this.frmGroup.value: ', this.frmGroup.value);
    console.log('this.productData: ', this.productData);
    let data = {
      formValue: this.frmGroup.value,
      pData: this.productData
    }
    this.activeModal.close(data);
  }
}
