import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Servicio } from '../../beans/servicio';
import { ModalController, ToastController } from '@ionic/angular';
import { ConfirmServicioModalPage } from '../confirm-servicio-modal/confirm-servicio-modal.page';
@Component({
    selector: 'app-offer-services',
    templateUrl: './offer-services.page.html',
    styleUrls: ['./offer-services.page.scss'],
})
export class OfferServicesPage implements OnInit {
    private servicioTypes = [
        { name: 'Comida', icon: 'pizza' },
        { name: 'Rent', icon: 'business' },
        { name: 'eComerce', icon: 'cart' },
        { name: 'Deportes', icon: 'fitness' },
        { name: 'Educación', icon: 'school' },
        { name: 'Viajes', icon: 'airplane' },
        { name: 'Construccion', icon: 'construct' }
    ];

    private created_at = new Date().toISOString();

    private servicio: Servicio;
    private servicioDefault: Servicio = {
        type: this.servicioTypes[0].name,
        icon: this.servicioTypes[0].icon,
        name: '',
        address: '',
        home_delivery: false,
        has_physical_offices: false,
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
            let serviceType = this.servicioTypes.find(obj => obj.name == this.servicio.type);
            this.servicio.icon = serviceType.icon;
        }
        let modal = await this.modalCtrl.create({
            component: ConfirmServicioModalPage,
            cssClass: 'modalCss'
        });
        modal.present();
        modal.onDidDismiss().then(res => {
            if (res && res.data.reload) {
                this.servicios.updateServicio(this.servicio).then(() => {
                    let toast = this.toastCtrl.create({
                        message: 'Servicio agregado correctamente',
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

    public setDefaultInformation() {
        this.servicio = {
            type: this.servicioDefault.type,
            icon: this.servicioDefault.icon,
            name: this.servicioDefault.name,
            address: this.servicioDefault.address,
            home_delivery: this.servicioDefault.home_delivery,
            has_physical_offices: this.servicioDefault.has_physical_offices,
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
