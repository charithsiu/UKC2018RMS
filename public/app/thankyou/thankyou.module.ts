import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ThankyouRoutes } from './thankyou.routes';
import { ThankyouComponent } from './thankyou.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ThankyouRoutes),
  ],
  declarations: [
    ThankyouComponent,
  ]
})
export class ThankyouModule {}
