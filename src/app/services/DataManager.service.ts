import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Config } from '../services/Config.service';
import { AuthService } from './Auth.service';

/**
 * Service that provides a wrapper for retrieving data from the server
 * 
 * @author Joshua Kissoon
 * @since 20160826
 * 
 * @todo Setup a configuration file with config information such as the BASE_URL
 */
@Injectable()
export class DataManager
{

    private baseUrl = "";
    private accessToken: string;

    public constructor(private config: Config, private http: Http, private authService: AuthService)
    {
        this.accessToken = this.authService.getAccessToken();
        this.baseUrl = this.config.getBaseUrl();
    }

    /**
     * Callback wrapper for the HTTP GET Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    GET(urlq: string)
    {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'accessToken': this.authService.getAccessToken(),
        });

        return this.http
            .get(this.baseUrl + urlq, { headers: headers, body: '' })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error => { console.log(error) });
    }

    /**
     * Callback wrapper for the HTTP POST Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * @param object The object containing the POST data to be sent
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    POST(urlq: string, object: any)
    {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'accessToken': this.authService.getAccessToken(),
        });

        if (null == object)
        {
            object = { "blank": "blank" };
        }

        return this.http
            .post(this.baseUrl + urlq, JSON.stringify(object), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error => { console.log(error) });
    }

    /**
     * Callback wrapper for the HTTP POST Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * @param object The object containing the POST data to be sent
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    POSTRAW(urlq: string, object: any)
    {
        const headers = new Headers({
            'accessToken': this.authService.getAccessToken(),
        });

        return this.http
            .post(this.baseUrl + urlq, object, { headers: headers })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error => { console.log(error) });
    }


    /**
     * Callback wrapper for the HTTP PUT Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * @param object The object containing the PUT data to be sent
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    PUT(urlq: string, object: any)
    {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'accessToken': this.authService.getAccessToken(),
        });

        if (null == object)
        {
            object = { "blank": "blank" };
        }

        return this.http
            .put(this.baseUrl + urlq, JSON.stringify(object), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error => { console.log(error) });
    }

    /**
     * Callback wrapper for the HTTP PATCH Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * @param object The object containing the PUT data to be sent
     * 
     * @author Joshua Kissoon
     * @since 20161107
     */
    PATCH(urlq: string, object: any)
    {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'accessToken': this.authService.getAccessToken(),
        });

        if (null == object)
        {
            object = { "blank": "blank" };
        }

        return this.http
            .patch(this.baseUrl + urlq, JSON.stringify(object), { headers: headers })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error => { console.log(error) });
    }

    /**
     * Callback wrapper for the HTTP DELETE Call
     * 
     * @param urlq The query part of the URL to be sent to the server
     * 
     * @author Joshua Kissoon
     * @since 20160826
     */
    DELETE(urlq: string)
    {

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'accessToken': this.authService.getAccessToken(),
        });

        return this.http
            .delete(this.baseUrl + urlq, { headers: headers, body: '' })
            .toPromise()
            .then(res => res.json())
            .then(res =>
            {
                return res;
            })
            .catch(error => { console.log(error) });
    }


}