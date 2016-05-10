import {Component, OnInit} from "angular2/core";
import {MessageComponent} from "./message.component";
import {Message} from "./message";
import {MessageService} from "./message.service";
@Component({
	selector: 'my-message-list',
	template: `
		<my-message *ngFor="#message of messages" [message]="message" (editClicked)="message.content = $event"></my-message>
	`,
    directives: [MessageComponent]
})
export Class MessageListComponent implements OnInit {
	
	constructor(private _messageService: MessageService) {}

	messages: Message[];

	ngOnInit(){
		this.messages = this._messageService.getMessages();

	}
	
}