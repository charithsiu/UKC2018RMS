import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routers';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Register_step1Component } from './step1/register_step1.component';
import { Register_step2Component } from './step2/register_step2.component';
import { Register_step3Component } from './step3/register_step3.component';
import { Register_step4Component } from './step4/register_step4.component';
import { Register_step5Component } from './step5/register_step5.component';


@NgModule({
imports: [
CommonModule,
FormsModule,
RouterModule.forChild(RegisterRoutes),
],
declarations: [
RegisterComponent,
Register_step1Component,
Register_step2Component,
Register_step3Component,
Register_step4Component,
Register_step5Component,
ThankyouComponent,
]
})
export class RegisterModule {}