import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routers';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RegisterPage_FComponent } from './regpage_f/registerpage_f.component';


@NgModule({
imports: [
CommonModule,
FormsModule,
RouterModule.forChild(RegisterRoutes),
],
declarations: [
RegisterComponent,
RegisterPage_FComponent,
ThankyouComponent,
]
})
export class RegisterModule {}