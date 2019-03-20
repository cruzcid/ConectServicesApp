import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.page.html',
    styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

    private currency = 'eur';

    @ViewChild('slides') slides: IonSlides;

    constructor(private storage: Storage, private router: Router) { }

    ngOnInit() {
    }

    public next() {
        this.slides.slideNext();
    }
    public async saveAndStart() {
        await this.storage.set('seen-intro', true);
        
        this.router.navigateByUrl('/');
    }
}
