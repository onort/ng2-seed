import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
  selector: 'navbar',
  templateUrl: 'app/navbar/navbar.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {
 //TODO: Active Link
}