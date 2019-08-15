import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn = false;
    redirectUrl: string;    // Store the URL so we can redirect after logging in

    login(): Observable<boolean> {
        return of(true).pipe(
            delay(1000),
            tap(val => this.isLoggedIn = true)
        );
    }
        
    logout(): void {
        this.isLoggedIn = false;
    }
}
