import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductSubmissionComponent } from './product-submission/product-submission.component';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  {
    path: "",
    component: ProductsComponent,
  },
];

@NgModule({
  declarations: [ProductsComponent, ProductCartComponent, ProductSubmissionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MatRadioModule,
    MatDialogModule
  ]
})
export class ProductsModule { }
