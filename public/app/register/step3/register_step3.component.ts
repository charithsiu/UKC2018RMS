import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { RegisterService } from '../register.service';
import { Script } from 'vm';
@Component({
selector: 'step3',
templateUrl: 'app/register/step3/register_step3.template.html',
providers:[RegisterService]
})
export class Register_step3Component {
    register: any = {};
    errorMessage: string;
    
    constructor (private _registerService: RegisterService, 
        private _router: Router) {}

        save4step1() {
this._registerService.save4step1(this.register)
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