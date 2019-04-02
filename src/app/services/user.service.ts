import { Injectable } from '@angular/core';
import { User } from '../beans/user';
import { Storage } from '@ionic/storage';

const USERS_KEY = 'users';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private storage: Storage
    ) { }

    public async getUser(username: string):Promise<User>{
        let noUser:User = {username:"", password:""};      
        return this.storage.get(USERS_KEY).then( res => { 
            if(res){                
                for( let i in res ){
                    if(res[i].username == username){
                        console.log("user Loged in");
                        return res[i];                        
                    }
                }
                return noUser;
            }else{
                          
                return noUser;
            }
           
        });
    }
    public async setUsers(users:User[]){
        return await this.storage.set(USERS_KEY, users);
    }
}
