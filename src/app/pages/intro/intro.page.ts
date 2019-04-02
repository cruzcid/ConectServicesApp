import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { USERS, SERVICIOS } from '../../mock/mockdata';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.page.html',
    styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

    private currency = 'eur';

    @ViewChild('slides') slides: IonSlides;

    constructor(
        private storage: Storage, 
        private router: Router, 
        private userService:UserService,
        private serviciosService:ServiciosService) { }

    ngOnInit() {
    }

    public next() {
        this.slides.slideNext();
    }
    public async saveAndStart() {
        await this.storage.set('seen-intro', true);
        await this.userService.setUsers(USERS);
        await this.serviciosService.updateServicios(SERVICIOS);
        this.router.navigateByUrl('/');
    }
}
