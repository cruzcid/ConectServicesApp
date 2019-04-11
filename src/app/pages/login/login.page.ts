import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage';

const AUTENTICATION_KEY:string = 'is-autenticated';
const AUTENTICATED_USER:string = 'auth-user';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    private user_email: string;
    private password: string;
    constructor(
        private router: Router,
        private userService: UserService,
        private storage:Storage) { }

    ngOnInit() {

    }

    public attemptLoggin(mForm) {
        console.log(mForm.form.value);
        let value = mForm.form.value;
        this.userService.getUser(value.user_email)
            .then((user) => {
                console.log("userResponse positive");
                console.log(user);
                if(value.user_email === user.email && value.password === user.password){ 
                    this.storage.set(AUTENTICATION_KEY, true);
                    this.storage.set(AUTENTICATED_USER, user);
                    this.router.navigateByUrl('/menu/my-profile')
                }
            })
            .catch((user) => {
                console.log("userResponse negative");
                console.log(user);
            });
    }
    public login(mForm): void {
        console.log(mForm);
    }
}
