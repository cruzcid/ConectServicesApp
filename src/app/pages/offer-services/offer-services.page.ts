import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../services/servicios.service';
@Component({
    selector: 'app-offer-services',
    templateUrl: './offer-services.page.html',
    styleUrls: ['./offer-services.page.scss'],
})
export class OfferServicesPage implements OnInit {
    servicioTypes = [
        { name: 'Food', icon: 'pizza' },
        { name: 'Rent', icon: 'business' },
        { name: 'eComerce', icon: 'cart' },
        { name: 'Sports', icon: 'fitness' },
        { name: 'Education', icon: 'school' },
        { name: 'Travel', icon: 'airplane' }
    ];
    
    created_at = new Date().toISOString();
    private servicio:Servicio;
    private servicioDefault: Servicio = {
        type: this.servicioTypes[0].name,
        address: '',
        home_delivery: false,
        price: 0,
        product_description: '',
        created_at: Date.now(),
        enterpriseId: 123
    }
 
    constructor() { 
        this.servicio = this.servicioDefault;
    }
        
    ngOnInit() {
    }
    public onCancel(){

    }

}
