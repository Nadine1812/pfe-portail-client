export class Mail {
    codeUser: String;
    subject: String;
    content: String;
    sendTo: String;

    constructor() {
        this.codeUser = '';
        this.subject = '';
        this.content = '';
        this.sendTo = '';
    }
}
