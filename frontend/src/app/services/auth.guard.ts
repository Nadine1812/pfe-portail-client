import {Injectable} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {TokenStorageService} from "../pages/auth/token-storage.service";
//
@Injectable()
// export class AuthGuard implements CanActivate {
//     constructor(private authService: AuthService, private router: Router) {
//     }
//     canActivate(
//       next: ActivatedRouteSnapshot,
//       state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       return this.isLogin();
//     }
//     isLogin(): boolean {
//       if (localStorage.getItem('isAuth') === 'true') {
//         return true;
//       } else {
//         return true;
//       }
//     }
//     // isLogin(): boolean {
//     //     if (this.authService.isAuthenticated()) {
//     //         return true;
//     //     } else {
//     //         this.router.navigate(['/']);
//     //         return true;
//     //     }
//     // }
//
// }
export class AuthGuard implements CanActivate {
    constructor(private tokenStorage: TokenStorageService, private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const token = this.tokenStorage.token;
        console.log("token",token);
        var roles = this.tokenStorage.getAuthorities();
        if (token) {
            if (next.data.roles && next.data.roles.indexOf(roles[0]) === -1) {

                return false;
            } else {
                return true;
            }
        } else {
            this.router.navigate(["login"]);

            return false;
        }
    }
}

