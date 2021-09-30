import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  productData = {
    p_name: "",
    p_id: 0,
    p_cost: 0,
    p_availability: 0,
    p_details: "",
    p_category: "",
    p_image: ""
  }
  quantity = 0;
  buyNow = false;
  totalAmount = 0;
  err = '';
  errorM = false;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ProductCartComponent>,
    @Inject(MAT_DIALOG_DATA) public xdata: any
  ) {
    this.productData = xdata;
  }

  ngOnInit(): void {
  }

  buynow() {
    this.errorM = false;
    if (this.quantity > 0) {
      this.buyNow = true;
    }
    else {
      this.errorM = true;
      this.err = 'Please select atleast one piece'
    }
  }

  getTotal() {
    this.totalAmount = this.quantity * this.productData.p_cost;
  }

  submit() {
    this.dialog.closeAll();
  }

  back(){
    this.buyNow = false;
  }
}
