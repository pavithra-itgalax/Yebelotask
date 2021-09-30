import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/data';
import { ProductCartComponent } from './product-cart/product-cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  category = 'All';
  tempProductList: any = [];
  productList: any = [];

  constructor(
    public data: DataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getlist();
  }

  getlist() {
    this.data.getData('http://localhost:3000/products')
      .subscribe((success: any) => {
        this.productList = success;
        this.tempProductList = this.productList;
      });
  }

  getCategorizedList(){
    if(this.category !== 'All'){
    const searchList = this.tempProductList.filter(x => x.p_category === this.category);
    this.productList = searchList;
    }
    else{ 
      this.productList = this.tempProductList;
    }
  }

  addtoCart(productData){
    const dialogRef = this.dialog.open(ProductCartComponent, {
      width: "400px",
      height: "550px",
      data: productData
    });
    dialogRef.afterClosed().subscribe((result) => {
      // this.Branch = result;
    });
  }
}
