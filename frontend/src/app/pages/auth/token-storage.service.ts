import {Injectable} from '@angular/core';
import jwtDecode from "jwt-decode";

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    private roles: Array<string> = [];

    constructor() {
    }

    signOut() {
        window.sessionStorage.clear();
    }

    public saveToken(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
        return sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUsername(username: string) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    }

    public getUsername(): string {
        const decodedToken = this.getDecodedAccessToken(sessionStorage.getItem(TOKEN_KEY));
        if (decodedToken != null) {
                return decodedToken.sub;
        }
        return null;
    }

    public saveAuthorities(authorities: string[]) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

    public getAuthorities(): string[] {
        this.roles = [];
        const decodedToken = this.getDecodedAccessToken(sessionStorage.getItem(TOKEN_KEY));
        console.log(decodedToken);
        if (decodedToken != null) {
          decodedToken.auth.forEach(auth => {
                this.roles.push(auth.authority);
            });
        }
        return this.roles;
    }

    getDecodedAccessToken(token: string): any {
        try {
            return jwtDecode(token);
        } catch (Error) {return null; }
    }
}
