import { Role } from './Role';

export class User {
    id: number;
    code: string;
    username: string;
    pwd: number;
    raisonsocial: string;
    tel: string;
    adress: string;
    status: string;
    roles: Role[];
    active:String;
}