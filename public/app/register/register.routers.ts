import { Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RegisterPage_FComponent } from './regpage_f/registerpage_f.component';

export const RegisterRoutes: Routes = [{
path: 'register',
component: RegisterComponent,
 children: [
     {path:'regpage_f',component:RegisterPage_FComponent},
 	//{path: 'thankyou', component: ThankyouComponent},
// 	//{path: ':articleId', component: ViewComponent}
   ],
}];