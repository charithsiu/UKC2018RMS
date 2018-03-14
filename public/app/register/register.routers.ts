import { Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Registerpage_step1Component } from './step1/registerpage_step1.component';

export const RegisterRoutes: Routes = [{
path: 'register',
component: RegisterComponent,
 children: [
     {path:'step1',component:Registerpage_step1Component},
 	//{path: 'thankyou', component: ThankyouComponent},
// 	//{path: ':articleId', component: ViewComponent}
   ],
}];