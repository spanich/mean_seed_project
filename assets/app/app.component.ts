import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";
@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-header></my-header>
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@RouteConfig([
    {path: '/', name: 'Messages', component: MessagesComponent, useAsDefault: true},
    {path: '/auth/...', name: 'Auth', component: AuthenticationComponent}
])
export class AppComponent {
    
}