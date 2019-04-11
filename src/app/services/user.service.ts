import { Injectable } from '@angular/core';
import { User } from '../beans/user';
import { Storage } from '@ionic/storage';
import { EMPRESAS } from '../mock/mockdata';

const USERS_KEY = 'users';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private storage: Storage
    ) { }

    public async getUser(user_email: string):Promise<User>{
        let noUser:User = {username:"", password:"", empresa:EMPRESAS[0], email:""};      
        return await this.storage.get(USERS_KEY).then( res => { 
            if(res){                
                for( let i in res ){
                    if(res[i].email == user_email){
                        console.log("user found in users");
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
        return await this.storage.set(USERS_KEY, users)
            .then( (res)=>{
                console.log("setUsers Added successfully");
                return { setUsersSuccess:true};
            }).catch((err) =>{
                console.log("setUsers cannot be Added successfully");
                return { setUsersSuccess:false};
            });
    }
    public async getUsers():Promise<User[]>{
        return await this.storage.get(USERS_KEY)
        .then((res) =>{
            console.log(res);
            return res;
        }).catch( res => {
            console.log("An error ocurred while getting the users");
            console.log(res);
            return res;
        });
    }
    public async addUser(user:User):Promise<any>{
        return await this.getUsers()
            .then((res) => {
                console.log("UserService.addUser result");
                console.log(res);
                let allUsers:User[] = [];
                allUsers = res;
                allUsers.push(user);

                return this.setUsers(allUsers)
                .then((res)=>{
                    return res;
                })
                .catch((res)=>{
                    return res;
                });                
            }
        );
    }
}
