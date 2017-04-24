import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { User } from '../user/User';

/**
 * @todo Check if session is valid on page refresh
 */
@Injectable()
export class AuthService
{
    public static KEY_ACCESS_TOKEN = "authService_accessToken";
    public static KEY_USER = "authService_user";
    private accessToken: string;
    private loggedIn = false;
    private user = new User();

    public constructor()
    {
        this.accessToken = localStorage.getItem(AuthService.KEY_ACCESS_TOKEN);
        this.loggedIn = !!this.accessToken;
    }

    login(iuser: User, iaccessToken: string)
    {
        this.accessToken = iaccessToken;
        localStorage.setItem(AuthService.KEY_ACCESS_TOKEN, iaccessToken);
        localStorage.setItem(AuthService.KEY_USER, JSON.stringify(iuser));
        this.loggedIn = true;
        this.user = iuser;
    }

    getUser(): User
    {
        var _data = JSON.parse(localStorage.getItem(AuthService.KEY_USER));
        
        if (_data == null)
        {
            return new User();
        }
        
        this.user = new User();
        this.user.loadFromMap(_data);
        return this.user;
    }

    isLoggedIn(): boolean
    {
        this.accessToken = localStorage.getItem(AuthService.KEY_ACCESS_TOKEN);
        this.loggedIn = !!this.accessToken;

        return this.loggedIn;
    }

    getAccessToken(): string
    {
        this.accessToken = localStorage.getItem(AuthService.KEY_ACCESS_TOKEN);
        return this.accessToken;
    }

    signOut()
    {
        localStorage.removeItem(AuthService.KEY_ACCESS_TOKEN);
        localStorage.removeItem(AuthService.KEY_USER);
        this.loggedIn = false;
    }
}