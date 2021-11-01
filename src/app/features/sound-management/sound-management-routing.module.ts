import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundManagementComponent } from './sound-management.component';

const routes: Routes = [
  {
    path: "",
    component: SoundManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoundManagementRoutingModule { }
