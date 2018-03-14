import { Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Register_step1Component } from './step1/register_step1.component';

export const RegisterRoutes: Routes = [{
path: 'register',
component: RegisterComponent,
 children: [
     {path:'step1',component:Register_step1Component},
 	//{path: 'thankyou', component: ThankyouComponent},
// 	//{path: ':articleId', component: ViewComponent}
   ],
}];