import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    @ViewChild('slides') slides: IonSlides;

    private button_label: string = "Continuar";
    private nextSlideEnabled: boolean = false;
    private previousSlideEnabled: boolean = false;
    private activeIndex:number;
    constructor() { 

    }
    ionViewWillEnter() {
        this.currentSlideState();
        this.slides.lockSwipeToPrev(true);
        this.slides.lockSwipeToNext(true);
    }
    ngOnInit() {
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
        /*if (this.previousSlideEnabled) {
            this.slides.lockSwipeToPrev(false);
            this.slides.lockSwipes(false);            
            this.slides.lockSwipeToNext(true);
        } else {
            this.slides.lockSwipeToPrev(true); 
            this.slides.lockSwipes(false);            
            this.slides.lockSwipeToNext(true);           
        }*/
        console.log(this.activeIndex);
    }
    private registerForm(form) {
        console.log("Active index:");
        console.log(this.slides.getActiveIndex());
        this.currentSlideState();
        let isValidForm = false;
        if(this.activeIndex==0){
            isValidForm = this.firstStepValidation(form);
        } else if (this.activeIndex==1){
            isValidForm = this.secondStepValidation(form);
        } else if (this.activeIndex ==2){
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
    private thirdStepValidation(mForm):boolean{
        return false;
    }

}
