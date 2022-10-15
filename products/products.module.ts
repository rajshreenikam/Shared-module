import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { MobileComponent } from './mobile/mobile.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { UtilityModule } from '../utility/utility.module';

const prodRoutes: Routes =[
  {path:'products',component:ProductsComponent,children:[    //child route
    // {path:'',component:ProductsComponent},  //localhost:4200/products
    {path:'laptop', component:LaptopComponent},        //localhost:4200/products/laptop
    {path:'washingmachine',component:WashingmachineComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:MobileComponent}
  ]},
]
 
 

@NgModule({
  declarations: [
    LaptopComponent,
    TvComponent,
    MobileComponent,
    WashingmachineComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsModule { }
