import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { RegisterService } from '../register.service';
import { Script } from 'vm';
@Component({
selector: 'regpage_f',
templateUrl: 'app/register/regpage_f/registerpage_f.template.html',
providers:[RegisterService]
})
export class RegisterPage_FComponent {
    register: any = {};
    errorMessage: string;
    
    constructor (private _registerService: RegisterService, 
        private _router: Router) {}

signup() {
this._registerService.signup(this.register)
                          .subscribe(result  => this._router.navigate(['/thankyou']),
                                      error =>  this.errorMessage = error);
}

ngAfterViewInit(){
  
    $(document).ready(function () {
        //alert("Hello");
        //$('#registerform')[0].reset();
        //location.reload();
       // $('#termselect').val("Spring 2018").val();
        //$('#programselect').val("IST Online Program").val();


        //$("#programselect option[text='IST Online Program']").attr("selected","selected"); 


    });

    
 }

}