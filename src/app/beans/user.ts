import { Empresa } from './empresa';

export interface User {
    username:string;
    email:string;
    password:string;
    empresa:Empresa;
}
