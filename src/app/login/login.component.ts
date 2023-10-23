
import { Component } from '@angular/core';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

 

export class LoginComponent {

  btnColour:any='red';

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router, private route: ActivatedRoute){

 

  }

  // login(){
  //   this.router.navigate(['/dashboard']);
  // }

}

 