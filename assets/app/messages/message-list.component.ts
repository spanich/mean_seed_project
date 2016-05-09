import {Component} from "angular2/core";
import {MessageComponent} from "./message.component";
import {Message} from "./message";
@Component({
	selector: 'my-message-list',
	template: `
		<my-message *ngFor="#message of messages" [message]="message" (editClicked)="message.content = $event"></my-message>
	`,
    directives: [MessageComponent]
})
export Class MessageListComponent {
	messages: Message[] = [
		new Message('A new message', null, 'Max');
		new Message('Another message', null, 'Anna');
	];
	
}