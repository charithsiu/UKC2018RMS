import {Component} from '@angular/core';
import{Router} from '@angular/router';
import {RegisterService} from '../register.service';

@Component({
	selector: 'thankyou',
	templateUrl: 'app/register/thankyou/thankyou.template.html',
	providers:[RegisterService]
})
export class ThankyouComponent{
	register: any;
	errorMessage: string;

	constructor(private _registerService: RegisterService) {}

	/* ngOnInit() {
		this._registerService.list().subscribe(register  => this.register = register);
	} */
}