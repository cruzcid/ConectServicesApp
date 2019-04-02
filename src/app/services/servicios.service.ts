import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Servicio } from '../beans/servicio'

const SERVICES_KEY = 'servicios';


@Injectable({
    providedIn: 'root'
})
export class ServiciosService {
    constructor(private storage: Storage, private toastCtrl: ToastController) { }

    async updateServicio(transaction: Servicio) {
        return await this.obtainServicios().then(servicios => {
            servicios.push(transaction);
            console.log('Saving: ', servicios);
            return this.storage.set(SERVICES_KEY, servicios);
        });
    }
    // Obtener servicio por id. Checarlo con 
    async obtainServicio(): Promise<Servicio[]> {
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
    async obtainServicios(): Promise<Servicio[]> {
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

    async updateServicios(servicios:Servicio[]) {
        return await this.storage.set(SERVICES_KEY, servicios);
    }

    deleteServicios() {
        this.storage.remove(SERVICES_KEY);
        let toast = this.toastCtrl.create({
            message: 'Servicios eliminados cleared!',
            duration: 2000
        });
        toast.then(toast => toast.present());
    }

    deleteServicio() {
        this.storage.remove(SERVICES_KEY);
        let toast = this.toastCtrl.create({
            message: 'Servicios eliminados cleared!',
            duration: 2000
        });
        toast.then(toast => toast.present());
    }
}
