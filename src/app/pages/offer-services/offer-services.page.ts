import { Component, OnInit } from '@angular/core';
import { Servicio, ServiciosService } from '../../services/servicios.service';
import { ModalController, ToastController } from '@ionic/angular';
import { ConfirmServicioModalPage } from '../confirm-servicio-modal/confirm-servicio-modal.page';
@Component({
    selector: 'app-offer-services',
    templateUrl: './offer-services.page.html',
    styleUrls: ['./offer-services.page.scss'],
})
export class OfferServicesPage implements OnInit {
    private servicioTypes = [
        { name: 'Food', icon: 'pizza' },
        { name: 'Rent', icon: 'business' },
        { name: 'eComerce', icon: 'cart' },
        { name: 'Sports', icon: 'fitness' },
        { name: 'Education', icon: 'school' },
        { name: 'Travel', icon: 'airplane' }
    ];

    private created_at = new Date().toISOString();

    private servicio: Servicio;
    private servicioDefault: Servicio = {
        type: this.servicioTypes[0].name,
        address: '',
        home_delivery: false,
        price: 0,
        product_description: '',
        created_at: Date.now(),
        enterpriseId: 123,
        availability: 0 
    }

    constructor(
        private modalCtrl: ModalController,
        private servicios:ServiciosService,
        private toastCtrl: ToastController 
    ) {
        this.setDefaultInformation();
    }

    ngOnInit() {
    }
    public onCancel() {
        this.setDefaultInformation();
    }
    public async onAddServicio() {
        if(this.verifyInformation()){

        }
        let modal = await this.modalCtrl.create({
            component: ConfirmServicioModalPage,
            cssClass: 'modalCss'
        });
        modal.present();
        modal.onDidDismiss().then(res => {
            if (res && res.data.reload) {
                this.servicios.agregarServicio(this.servicio).then(() => {
                    let toast = this.toastCtrl.create({
                        message: 'Servicio guardado',
                        duration: 2000
                    });
                    toast.then(toast => toast.present());                   
                }).catch(() => {
                    let toast = this.toastCtrl.create({
                        message: 'Ocurrio un error, intente de nuevo',
                        duration: 2000
                    });
                    toast.then(toast => toast.present());
                });
                
                console.log("AddService Completed");
            }
        });
    }

    public loadTransactions() {

    }
    public setDefaultInformation() {
        this.servicio = {
            type: this.servicioDefault.type,
            address: this.servicioDefault.address,
            home_delivery: this.servicioDefault.home_delivery,
            price: this.servicioDefault.price,
            product_description: this.servicioDefault.product_description,
            created_at: Date.now(),
            enterpriseId: this.servicioDefault.enterpriseId,
            availability: this.servicioDefault.availability 
        };     
    }
    public verifyInformation(){
        let verified = true;
        return verified;
    }
}
