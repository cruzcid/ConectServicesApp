import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
    {
        path: '',
        component: MenuPage,
        children: [
            { path: 'my-profile', loadChildren: '../my-profile/my-profile.module#MyProfilePageModule' },  
            { path: 'find-services', loadChildren: '../find-services/find-services.module#FindServicesPageModule' },                      
            { path: 'offer-services', loadChildren: '../offer-services/offer-services.module#OfferServicesPageModule' },
            { path: 'settings', loadChildren: '../settings/settings.module#SettingsPageModule' },            
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [MenuPage]
})
export class MenuPageModule { }
