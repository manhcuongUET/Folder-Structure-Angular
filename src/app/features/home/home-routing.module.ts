import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListCustomersComponent } from './pages/list-customers/list-customers.component';
import { MenuManagermentComponent } from './pages/menu-managerment/menu-managerment.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // children: [
    //   {
    //     path: "",
    //     component: ListCustomersComponent
    //   },
    //   {
    //     path: "*",
    //     component: MenuManagermentComponent
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
