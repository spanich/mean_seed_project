import {Component, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators, Control} from "angular2/common";
@Component({
	selector: 'my-signin',
	template: `
		<section class="col-md-8 col-md-offset-2">
			<form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
				<div class="form-group">
					<label for="email">Mail</label>
					<input [ngFormControl]="myForm.find('email')" type="email" id="email" class="form-control">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input [ngFormControl]="myForm.find('password')" type="password" id="password" class="form-control">
				</div>
				<button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Sign Up</button>
			</form>
		</section>

	`
})

export class SignInComponent implements OnInit {
	
	myForm:ControlGroup;

	constructor(private _fb:FormBuilder){}

	onSubmit(){
		console.log(myForm.value);
	}

	ngOnInit(){
		this.myForm = this._fb.group({
			email: ['', Validators.compose([
				Validators.required,
				this.isEmail
				])],
			password: ['', Validators.required]
		});
	}

	private isEmail(control: Control): {[s: string]: boolean} {
		if (!control.value.match("/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/")) {
			return {invalidMail: true};
		}
	}
	
}