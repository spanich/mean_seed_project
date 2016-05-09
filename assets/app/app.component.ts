import {Component} from "angular2/core";
import {MessageListComponent} from "./messages/message-list-component";
import {MessageInputComponent} from "./messages/message-input-component";
    selector: 'my-app',
    template: `  
    	<div class="row spacing">
    		<my-message-input></my-message-input>
       	</div>
        <div class="row spacing">
        	<my-message-list></my-message-list>
        </div>
    `
    directives: [MessageListComponent, MessageInputComponent]
})
export class AppComponent {
	
}