import { Component, OnInit } from "@angular/core";

import { DataManager } from "../services/DataManager.service";
/**
 * Component to test the ping
 */
@Component({
    selector: "ping-controller",
    templateUrl: "./ping.html"
})
export class PingControllerComponent implements OnInit
{

    private timestamp: string;

    constructor(private dataManager: DataManager)
    {
        this.timestamp = "";
    }

    ngOnInit()
    {
        this.pingServer();
    }

    pingServer()
    {
        this.dataManager.GET("/ping").then(
            res =>
            {
                this.timestamp = res.ack;
            }
        );
    }
}