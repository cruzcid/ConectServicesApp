import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-confirm-servicio-modal',
    templateUrl: './confirm-servicio-modal.page.html',
    styleUrls: ['./confirm-servicio-modal.page.scss'],
})
export class ConfirmServicioModalPage implements OnInit {

    constructor(
        private modalCtrl: ModalController,
    ) { }

    ngOnInit() {
    }
    public onCancel() {        
        this.modalCtrl.dismiss({ reload: false });
    }
    public onConfirm() {
        this.modalCtrl.dismiss({reload: true});        
    }
}
