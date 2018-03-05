import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routers';
import { RegisterComponent } from './register.component';
import { ThankyouComponent } from './thankyou/thankyou.component';


@NgModule({
imports: [
CommonModule,
FormsModule,
RouterModule.forChild(RegisterRoutes),
],
declarations: [
RegisterComponent,
ThankyouComponent,
]
})
export class RegisterModule {}