export class SignUpInfo {
    username: string;
    role: string[];
    pwd: string;

    constructor( username: string, role:string, pwd: string) {
        this.username = username;
        this.pwd = pwd;
        this.role = ['admin'];
    }
}
