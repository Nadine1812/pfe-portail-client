export class SignUpInfo {
    code: string;
    username: String;
    roles: String[];
    pwd: String;


    constructor() {
        this.username = '';
        this.pwd = '';
        this.roles = [];
        this.code = '';
    }
}
