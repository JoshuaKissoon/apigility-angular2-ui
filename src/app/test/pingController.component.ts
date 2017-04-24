import { Component } from "@angular/core";

import { DataManager } from "../services/DataManager.service";
/**
 * Component to test the ping
 */
@Component({
    selector: "ping-controller",
    templateUrl: "./ping.html"
})
export class PingControllerComponent
{
    constructor(private dataManager: DataManager)
    {
        this.dataManager.GET("/ping").then(
            res =>
            {
                console.log(res);
            }
        );
        
    }
}