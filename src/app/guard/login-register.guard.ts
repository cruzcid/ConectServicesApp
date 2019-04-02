import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

const AUTENTICATION_KEY:string = 'is-autenticated'

@Injectable({
    providedIn: 'root'
})
export class LoginRegisterGuard implements CanActivate {
    constructor(
        private storage: Storage,
        private router: Router
        ) {
    }
    public async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        let isAutenticated = await this.storage.get(AUTENTICATION_KEY);
        if (!isAutenticated) {
            this.router.navigateByUrl('menu/login');
        }
        return isAutenticated;
    }
}