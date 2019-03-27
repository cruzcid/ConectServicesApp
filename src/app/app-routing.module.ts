import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroGuard } from './guard/intro.guard';

const routes: Routes = [
    { path: 'intro', loadChildren: './pages/intro/intro.module#IntroPageModule' },
    {
        path: 'menu',
        canActivate: [IntroGuard],
        loadChildren: './pages/menu/menu.module#MenuPageModule'
    },
    {   path: '', redirectTo: 'menu/my-profile', pathMatch: 'full' },
    {   path: 'confirm-servicio-modal', 
        loadChildren: './pages/confirm-servicio-modal/confirm-servicio-modal.module#ConfirmServicioModalPageModule' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
