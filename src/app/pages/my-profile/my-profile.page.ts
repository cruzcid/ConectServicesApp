import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/beans/user';
import { Storage } from '@ionic/storage';
import { Empresa } from 'src/app/beans/empresa';

const AUTENTICATED_USER: string = 'auth-user';
@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.page.html',
    styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

    private profileImage = "./../../../assets/img/profilePic.png";
    private user: User;
    private enterprise: Empresa = undefined;

    constructor(
        private storage: Storage
    ) { }

    ngOnInit() {
    }
    async ionViewWillEnter() {
        this.user = await this.storage.get(AUTENTICATED_USER);
        if (this.user && this.user.empresa.razon_social != '') {
            this.enterprise = this.user.empresa;
        }

        console.log(this.user);
    }
}
