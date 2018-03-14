import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routers';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { Registerpage_step1Component } from './step1/registerpage_step1.component';


@NgModule({
imports: [
CommonModule,
FormsModule,
RouterModule.forChild(RegisterRoutes),
],
declarations: [
RegisterComponent,
Registerpage_step1Component,
ThankyouComponent,
]
})
export class RegisterModule {}