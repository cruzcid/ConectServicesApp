import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmServicioModalPage } from './confirm-servicio-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmServicioModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmServicioModalPage]
})
export class ConfirmServicioModalPageModule {}
