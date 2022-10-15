import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './new-product/new-product.component';
import { RouterModule, Routes } from '@angular/router';
import { NewProduct1Component } from './new-product1/new-product1.component';
import { NewProduct2Component } from './new-product2/new-product2.component';
import { UtilityModule } from '../utility/utility.module';

const new_productsRoutes: Routes =[
  {path:'new-product',component:NewProductComponent,children:[     
  {path:'new-product1', component:NewProduct1Component},       
  {path:'new-product2',component:NewProduct2Component},
  
]},
]

@NgModule({
  declarations: [
    NewProductComponent,
    NewProduct1Component,
    NewProduct2Component

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(new_productsRoutes),
    UtilityModule
  ]
   
})
export class NewProductsModule { }
