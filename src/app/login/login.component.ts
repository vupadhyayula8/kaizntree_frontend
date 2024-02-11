import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private apiService:ApiServiceService,private router:Router){}
  isAuthenticated = false;
  loginForm = new FormGroup({
 name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
 password :new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$')])
})
 registerFormShow = false;
  OnSubmit()
  {
    if(this.loginForm.valid)
    {
      //loginData:Login
      this.apiService.login(this.loginForm.value.name,this.loginForm.value.password).subscribe(
        (resp:any)=>
        {
          console.log(resp);
          if(resp == true)
          {
            this.isAuthenticated = true;
            localStorage.setItem('isLoggedIn','true');
            const x = this.loginForm.value.name;
            if(x != null)
              localStorage.setItem('token', x ); 
            this.router.navigateByUrl('item');
          }
        }
      );
    }
  }
  onClickCreate()
  {
    this.router.navigateByUrl('register');
  }
}
