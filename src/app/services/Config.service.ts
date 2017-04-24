import { Injectable } from '@angular/core';

/**
 * Service that provides settings for all other services
 * 
 * @author Joshua Kissoon
 * @since 20161202
 */
@Injectable()
export class Config
{
    private isProduction = false;

    getBaseUrl()
    {
        if (this.isProduction)
        {
            return "http://nelonix.com/geaplatformapi/?urlq=/";
        }
        else
        {
            return "http://localhost:3200";
        }
    }

    getRoutePrefix(app: string): string
    {
        var prefix = "public/";
        switch (app)
        {
            case "admin":
                prefix = "admin/";
                break;
            case "customer":
                prefix = "public/";
                break;
        }

        return prefix;
    }
}