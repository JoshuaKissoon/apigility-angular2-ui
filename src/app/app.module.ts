import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { enableProdMode } from '@angular/core';

enableProdMode();

/* Core Classes */
import { AppComponent } from './app.component';
import { RoutingProvider } from './app.routes';

/* Core Services */
import { Config } from './services/Config.service';
import { DataManager } from './services/DataManager.service';
import { AlertService } from './services/AlertService.service';
import { AuthService } from './services/Auth.service';

/* Test Components */
import { PingControllerComponent } from './test/pingController.component';

@NgModule({
    declarations: [
        AppComponent, 
        PingControllerComponent, 
    ],
    imports: [BrowserModule, FormsModule, HttpModule, RoutingProvider],
    providers: [Config, DataManager, AlertService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
