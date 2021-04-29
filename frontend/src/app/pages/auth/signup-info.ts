export class SignUpInfo {
    code: string;
    username: string;
    role: string[];
    pwd: string;


    constructor( username: string, role: string, pwd: string, code: string) {
        this.username = username;
        this.pwd = pwd;
        this.role = ['admin'];
        this.code = code;
    }
}
