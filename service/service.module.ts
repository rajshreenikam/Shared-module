import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service.component';
import { UtilityModule } from '../utility/utility.module';
 
 
 

const serviceRoutes: Routes =[
  {path:'service',component:ServiceComponent,children:[     
  {path:'service1', component:Service1Component},       
  {path:'service2',component:Service2Component},
  
]},
]

@NgModule({
  declarations: [
 
    Service1Component,
    Service2Component,
    ServiceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(serviceRoutes),
    UtilityModule
  ],
  exports:[
    RouterModule,
  ]
})
export class ServiceModule { }
