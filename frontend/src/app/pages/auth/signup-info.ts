export class SignUpInfo {
    username: string;
    role: string[];
    pwd: string;
    code: String;

    constructor( username: string, role:string, pwd: string, code: string) {
        this.username = username;
        this.pwd = pwd;
        this.role = ['admin'];
        this.code = code;
    }
}
