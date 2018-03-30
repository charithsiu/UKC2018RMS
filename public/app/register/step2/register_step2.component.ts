import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { RegisterService } from '../register.service';

@Component({
selector: 'step2',
templateUrl: 'app/register/step2/register_step2.template.html',
providers:[RegisterService]
})
export class Register_step2Component {
    register: any = {};
    errorMessage: string;
    
    paramsObserver: any;
    
    constructor (private _registerService: RegisterService, private _router:Router, 
        private _route: ActivatedRoute) {}

/* signup() {
this._registerService.signup(this.register)
                          .subscribe(result  => this._router.navigate(['/thankyou']),
                                      error =>  this.errorMessage = error);
} */

ngOnInit() {
    

    this.paramsObserver = this._route.params.subscribe(params => {
        let registerId = params['registerId'];
        console.log(registerId);

        this._registerService.read(registerId).subscribe(register => {
            this.register = register;
         },
        error => this._router.navigate(['/register/step1']));

    });
}

ngOnDestroy() {
    this.paramsObserver.unsubscribe();
}

ngAfterViewInit(){
  
    $(document).ready(function () {
       
        $("#room").hide();
        $("#broom").hide();
       var price = 0.00;

        $('input[type=radio][name=sharedsuiterb]').change(function() {
            //var bla = $('#txt_name').val();
             if (this.value == 'false') {
                price=300.00;
                alert("Your price:"+price);
                $("#room").hide();
                $("#broom").hide();
               
            }else{
                $("#broom").show();
               // $("input[type=radio][name=sharedroomrb]").attr('disabled', false);
            }
           
        });
        $('input[type=radio][name=sharedbrrb]').change(function() {
            if (this.value == 'false') {
               price=170.00;
               alert("Your price:"+price);
               $("#room").hide();
              
           }else{
            $("#room").show();
           }
          
       });
       $('input[type=radio][name=sharedroomrb]').change(function() {
        if (this.value == 'false') {
           price=120.00;
           alert("Your price:"+price);
       }else{
        price=90.00;
        alert("Your price:$"+price);
       }
      
   });

   $('#adultselect').change(function() {
    //var bla = $('#txt_name').val();
    alert("test");
    /* if (this.value == 'false') {

    }else{
       
    }*/
   
});

        //$('#registerform')[0].reset();
        //location.reload();
       // $('#termselect').val("Spring 2018").val();
        //$('#programselect').val("IST Online Program").val();


        //$("#programselect option[text='IST Online Program']").attr("selected","selected"); 


    });

    
 }

}