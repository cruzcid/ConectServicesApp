import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-csv-popover',
    templateUrl: './csv-popover.page.html',
    styleUrls: ['./csv-popover.page.scss'],
})
export class CsvPopoverPage implements OnInit {

    private custom_title: string;
    constructor(
        private navParams: NavParams,
        private popOverController: PopoverController
    ) { }

    ngOnInit() {
        this.custom_title = this.navParams.get('custom_title');
    }
    private closePopOver() {
        this.popOverController.dismiss();
    }
}
