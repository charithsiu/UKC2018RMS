import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { RegisterService } from '../register.service';
import { Script } from 'vm';
@Component({
selector: 'step1',
templateUrl: 'app/register/step1/register_step1.template.html',
providers:[RegisterService]
})
export class Register_step1Component {
    register: any = {};
    errorMessage: string;
    
    constructor (private _registerService: RegisterService, 
        private _router: Router) {}

save4step1() {
this._registerService.save4step1(this.register)
                          .subscribe(result  => this._router.navigate(['/register',result._id,'step2']),
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