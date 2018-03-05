import { Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

export const RegisterRoutes: Routes = [{
path: 'register',
component: RegisterComponent,
 children: [
    // {path:'',component:RegisterComponent},
 	//{path: 'thankyou', component: ThankyouComponent},
// 	//{path: ':articleId', component: ViewComponent}
   ],
}];