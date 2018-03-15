import { Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Register_step1Component } from './step1/register_step1.component';
import { Register_step2Component } from './step2/register_step2.component';
import { Register_step3Component } from './step3/register_step3.component';
import { Register_step4Component } from './step4/register_step4.component';
import { Register_step5Component } from './step5/register_step5.component';

export const RegisterRoutes: Routes = [{
path: 'register',
component: RegisterComponent,
 children: [
     {path:'step1',component:Register_step1Component},
     {path:'step2',component:Register_step2Component},
     {path:'step3',component:Register_step3Component},
     {path:'step4',component:Register_step4Component},
     {path:'step5',component:Register_step5Component},
 	//{path: 'thankyou', component: ThankyouComponent},
// 	//{path: ':articleId', component: ViewComponent}
   ],
}];