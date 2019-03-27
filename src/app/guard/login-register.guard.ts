import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

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
        let isAutenticated = await this.storage.get('is-autenticated');
        if (!isAutenticated) {
            this.router.navigateByUrl('menu/login');
        }
        return isAutenticated;
    }
}
