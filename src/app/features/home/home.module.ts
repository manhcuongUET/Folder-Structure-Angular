import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListCustomersComponent } from './pages/list-customers/list-customers.component';
import { MenuManagermentComponent } from './pages/menu-managerment/menu-managerment.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListCustomersComponent,
    MenuManagermentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
