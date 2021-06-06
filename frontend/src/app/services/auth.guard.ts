import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../pages/auth/token-storage.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private tokenStorage: TokenStorageService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const token = this.tokenStorage.token;
        console.log('token', token);
        let roles = this.tokenStorage.getAuthorities();
        if (token) {
            if (next.data.roles && next.data.roles.indexOf(roles[0]) === -1) {

                return false;
            } else {
                return true;
            }
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}

