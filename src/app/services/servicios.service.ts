import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


const SERVICES_KEY = 'servicios';

export interface Empresa {
    phisical_location: string,
    virtual_location: string,
    email: string,
    fiscal_reference: string
}

export interface Servicio {
    type: string,
    address: string,
    home_delivery: boolean,
    price: number,
    product_description: string,
    created_at: number,
    enterpriseId: number,
    availability: number
}
@Injectable({
    providedIn: 'root'
})
export class ServiciosService {
    constructor(private storage: Storage, private toastCtrl: ToastController) { }

    async agregarServicio(transaction: Servicio) {
        return await this.obtenerServicios().then(servicios => {
            servicios.push(transaction);
            console.log('Saving: ', servicios);
            return this.storage.set(SERVICES_KEY, servicios);
        });
    }
    // Obtener servicio por id. Checarlo con 
    async obtenerServicio(): Promise<Servicio[]> {
        return await this.storage.get(SERVICES_KEY).then(res => {
            if (res) {
                return res.sort((trans: Servicio, trans2: Servicio) => {
                    return trans2.created_at - trans.created_at;
                })
            } else {
                return [];
            }
        });
    }
    async obtenerServicios(): Promise<Servicio[]> {
        return await this.storage.get(SERVICES_KEY).then(res => {
            if (res) {
                return res.sort((trans: Servicio, trans2: Servicio) => {
                    return trans2.created_at - trans.created_at;
                })
            } else {
                return [];
            }
        });
    }

    async actualizarServicios(servicios) {
        return await this.storage.set(SERVICES_KEY, servicios);
    }

    /*updateCurrency(selected) {
        this.storage.set(SELECTED_CURRENCY_KEY, selected).then(() => {
            let toast = this.toastCtrl.create({
                message: 'Currency updated',
                duration: 2000
            });
            toast.then(toast => toast.present());
        })
    }*/

    eliminarServicios() {
        this.storage.remove(SERVICES_KEY);
        let toast = this.toastCtrl.create({
            message: 'Servicios eliminados cleared!',
            duration: 2000
        });
        toast.then(toast => toast.present());
    }

    eliminarServicio() {
        this.storage.remove(SERVICES_KEY);
        let toast = this.toastCtrl.create({
            message: 'Servicios eliminados cleared!',
            duration: 2000
        });
        toast.then(toast => toast.present());
    }
}
