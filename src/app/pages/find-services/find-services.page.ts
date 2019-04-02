import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/beans/servicio';
import { debounceTime } from "rxjs/operators";
import { FormControl } from '@angular/forms';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
    selector: 'app-find-services',
    templateUrl: './find-services.page.html',
    styleUrls: ['./find-services.page.scss'],
})
export class FindServicesPage implements OnInit {
    public searchControl: FormControl;
    private allServicios: Servicio[] =[];
    private searchTerm:string;
    private searching:boolean = false;
    private servicios: Servicio[];
    constructor(private serviciosService: ServiciosService) {
        this.searchControl = new FormControl();
    }

    ngOnInit() {
        this.setFilteredItems();
        this.searchControl.valueChanges
            .pipe(debounceTime(200))
            .subscribe(
                search => {
                    this.searching = false;
                    this.setFilteredItems();
            });
    }
    ionViewWillEnter() {
        this.serviciosService.obtainServicios().then((mServices) => {
            console.log("FindServicesPage: res");
            console.log(mServices);
            this.servicios = mServices;
            this.allServicios = mServices;
        });
    }
    private setFilteredItems() {
        this.servicios = this.filterItems();
    }
    private filterItems():Servicio[]{
        let serviciosFiltrados = this.allServicios.filter((item:Servicio)=>{
            return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        });
        this.searching = false;
        return serviciosFiltrados;
    }
    private onSearchInput(){
        this.searching = true;
        this.setFilteredItems();
    }
}
