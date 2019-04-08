import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController, PopoverController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/beans/user';
import { EMPRESAS } from 'src/app/mock/mockdata';
import { CsvPopoverPage } from '../csv-popover/csv-popover.page';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    @ViewChild('slides') slides: IonSlides;

    private nextSlideEnabled: boolean = false;
    private previousSlideEnabled: boolean = false;
    private activeIndex:number;
    private isAnEnterpriseRegistering:boolean = false;
    private formatoUno = {estado:""};
    private rangosEmpleadosEmpresa = [
        { name: 'Microempresa', numberOfWorkers: '1-10' },
        { name: 'Pequeña', numberOfWorkers: '11-50' },
        { name: 'Mediana', numberOfWorkers: '51-200' }
    ]
    private estadosMexico = [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "CDMX",
        "Chiapas",
        "Chihuahua",
        "Coahuila de Zaragoza",
        "Colima",
        "Durango",
        "Estado de México",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Michoacán de Ocampo",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas",
    ];

    constructor(
        private userService:UserService,
        private toastCtrl: ToastController,
        private popOverController:PopoverController
        ) { 

    }
    ionViewWillEnter() {
        this.currentSlideState();
        this.slides.lockSwipeToPrev(true);
        this.slides.lockSwipeToNext(true);
    }
    ngOnInit() {
    }
    private omitStepOne(){
        this.nextSlide();
    }
    private omitStepTwo(){
        this.nextSlide();
    }
    private nextSlide() {
        this.slides.lockSwipes(false);
        this.slides.slideNext();
        this.slides.lockSwipes(true);
        this.currentSlideState();
    }
    private prevSlide(){
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
        this.currentSlideState();
    }
    private async currentSlideState() {
        this.activeIndex = await this.slides.getActiveIndex().then((aIndex) => {
            return aIndex;
        });
        this.previousSlideEnabled = this.activeIndex > 0;           
    }
    private registerForm(form) {
        console.log("Active index:");
        console.log(this.slides.getActiveIndex());
        this.currentSlideState();
        let isValidForm = false;
        if(this.activeIndex==0){
            isValidForm = this.firstStepValidation(form);
        } else if (this.activeIndex == 1){
            isValidForm = this.secondStepValidation(form);
        } else if (this.activeIndex == 2){
            this.thirdStepValidation(form);
        }
        this.nextSlide();
    }
    private firstStepValidation(mForm):boolean{
        return false;
    }
    private secondStepValidation(mForm){
        return false;
    }
    private async thirdStepValidation(mForm){
        let formValue = mForm.form.value;
        let userCouldBeAdded = false;
        if(formValue.password == formValue.password_confirm){
            console.log("formValue");
            // Find if the user already exist
            await this.userService.getUser(formValue.email)
            .then((user) => {
                console.log("userResponse positive");
                console.log(user);
                if(user.username == ""){                    
                    // username available
                    userCouldBeAdded = true;                          
                }else {                   
                    // launch toast with error. 
                    let toast = this.toastCtrl.create({
                        message: 'El correo ya existe. Intenta con otro correo',
                        duration: 5000
                    });
        
                    toast.then(toast => toast.present());   
                }
            })
            .catch((user) => {
                console.log("userResponse negative");
                console.log(user);
                let toast = this.toastCtrl.create({
                    message: 'Ocurrio un error. Intenta de nuevo más tarde.',
                    duration: 5000
                });
    
                toast.then(toast => toast.present());      
            });

            // Add user 
            if(userCouldBeAdded){
                let userNovo:User = { email:'', empresa:EMPRESAS[0], password:'', username:''};
                userNovo.email = formValue.email;
                userNovo.empresa = EMPRESAS[0];
                userNovo.password = formValue.password;
                userNovo.username = formValue.name;
                await this.userService.addUser(userNovo);
            }
        } else {
            // launch toast with password should be equal
            console.log("password");
        }
    }    
    private confirmPasswords(value){

    }
    private async openCVVExplanation(event:Event){
        const popOver = await this.popOverController.create({
            component:CsvPopoverPage,
            componentProps:{ 
                custom_title: "Ubicación de CVV"
            }, 
            event:event
        });
        popOver.present();
    }

}
