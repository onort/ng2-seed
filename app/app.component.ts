import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {LogsComponent} from './logs/logs.component';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'my-app',
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home', useAsDefault: true},
  {path: '/dashboard', component: DashboardComponent, name: 'Dashboard'},
  {path: '/logs', name: 'Logs', component: LogsComponent}
])
export class AppComponent {
}