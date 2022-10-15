import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { comp1 } from './comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { CustdirDirective } from './custdir.directive';
import { ChildComponent } from './child/child.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { AddremoveitemComponent } from './addremoveitem/addremoveitem.component';
import { SimpletemplateComponent } from './simpletemplate/simpletemplate.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveformdatepickerComponent } from './reactiveformdatepicker/reactiveformdatepicker.component';
import { ConfirmpasswordDirective } from './confirmpassword.directive';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { DemoService } from './services/demo.service';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
 
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { Sample4Component } from './sample4/sample4.component';
import { Sample5Component } from './sample5/sample5.component';
import { Sample6Component } from './sample6/sample6.component';
import { ProductsModule } from './products/products.module';
import { ServiceModule } from './service/service.module';
import { NewProductsModule } from './new-products/new-products.module';
 
 

@NgModule({
  declarations: [
     AppComponent,
     comp1,
     Comp2Component,
     NgforComponent,
     NgswitchComponent,
     NgstyleComponent,
     NgclassComponent,
    //  CustdirDirective,
     ChildComponent,
     LifecyclehooksComponent,
     AddremoveitemComponent,
     SimpletemplateComponent,
     ReactiveformComponent,
     ReactiveformdatepickerComponent,
     ConfirmpasswordDirective,
     ConfirmpasswordComponent,
     UserComponent,
     FooterComponent,
     HomeComponent,
     AboutusComponent,
     ContactusComponent,
     LoginComponent,
     PagenotfoundComponent,
     ProductsComponent,
     
     Sample1Component,
     Sample2Component,
     Sample3Component,
     Sample4Component,
     Sample5Component,
     Sample6Component
  ],
  imports: [
    BrowserModule,
    FormsModule, // Assign forms module- for templet driven form
    ReactiveFormsModule,// for reactive forms
    HttpClientModule,
    ProductsModule,
    ServiceModule,
    NewProductsModule,
    AppRoutingModule
  ],
  providers: [DemoService,UserService],// service registration and angular create single instance of this service
  bootstrap: [AppComponent]
})
export class AppModule { }
