import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoundManagementRoutingModule } from './sound-management-routing.module';
import { SoundManagementComponent } from './sound-management.component';


@NgModule({
  declarations: [
    SoundManagementComponent
  ],
  imports: [
    CommonModule,
    SoundManagementRoutingModule
  ]
})
export class SoundManagementModule { }
