import {Injectable} from '@angular/core';
import jwtDecode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const USER_KEY = null;

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {
    private roles: Array<string> = [];
    public token?: string | null;

    constructor() {
    }

    signOut() {
        this.roles = [];
        window.sessionStorage.clear();
        this.token = null;

    }

    public saveToken(token: string) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
        this.token = token;
    }

    public saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, user);
    }

    public getUser() {
        window.sessionStorage.getItem(USER_KEY);
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
        } catch (Error) {
            return null;
        }
    }
}
