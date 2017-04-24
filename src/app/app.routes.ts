import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/ping', pathMatch: 'full' }
];

/* Home */
import { PingControllerComponent } from './test/pingController.component';
routes.push({ path: 'ping', component: PingControllerComponent });


export const RoutingProvider = RouterModule.forRoot(routes, { useHash: true });