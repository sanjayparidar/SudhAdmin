import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { Myservice} from './my.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PromocodeComponent } from './promocode/promocode.component';
import { PcodeviewComponent } from './pcodeview/pcodeview.component';

import { GrdFilterPipe } from './grd-filter.pipe';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { QuantityComponent } from './quantity/quantity.component';
import { ViewquantityComponent } from './viewquantity/viewquantity.component';
import { TestComponent } from './test/test.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { VieworderComponent } from './vieworder/vieworder.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const appRoutes: Routes = [

  { path: '', component: LoginComponent },
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  { path: 'addcard', component: AddcomponentComponent , canActivate: [AuthGuard]},
  { path: 'orderhistory', component: OrderhistoryComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserComponent,  canActivate: [AuthGuard] },
  { path: 'Userdetail', component: UserdetailComponent, canActivate: [AuthGuard] },
  { path: 'promocode', component: PromocodeComponent, canActivate: [AuthGuard] },
  { path: 'ViewPromocoded', component: PcodeviewComponent, canActivate: [AuthGuard] },
  {path:'quantity',component:QuantityComponent,canActivate:[AuthGuard]},
  {path:'viewquantity',component:ViewquantityComponent,canActivate:[AuthGuard]},
  {path:'test',component:TestComponent,canActivate:[AuthGuard]},
  {path:'vieworder',component:VieworderComponent,canActivate:[AuthGuard]}
 
];

@NgModule({
  declarations: [
    AppComponent,
  
    LoginComponent,
    AddcomponentComponent,
    OrderhistoryComponent,
    UserComponent,
    UserdetailComponent,
    PromocodeComponent,
    PcodeviewComponent,
    GrdFilterPipe,
    HeaderComponent,
    SidebarComponent,
    QuantityComponent,
    ViewquantityComponent,
    TestComponent,
    VieworderComponent,
    DashboardComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    
  

  ],
  
 
  providers: [Myservice, AuthGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
