import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { RegisterService } from './register.service';
import { Script } from 'vm';
@Component({
selector: 'register',
template: '<router-outlet></router-outlet>',
providers:[RegisterService]
})
export class RegisterComponent {}