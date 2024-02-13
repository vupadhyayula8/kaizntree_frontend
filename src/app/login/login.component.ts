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
hide = true;
error:string = "";
  OnSubmit()
  {
    if(this.loginForm.valid)
    {
      //loginData:Login
      this.apiService.login(this.loginForm.value.name,this.loginForm.value.password).subscribe(
        (resp:any)=>
        {
          console.log('response is', resp);
          console.log('statis is', resp.status)
          if(resp.status)
          {
            console.log("ok response");
            this.isAuthenticated = true;
            localStorage.setItem('isLoggedIn','true');
            const x = this.loginForm.value.name;
            if(x != null)
              localStorage.setItem('token', x ); 
            this.router.navigateByUrl('item');
          }
          else
          {
            this.error = resp.msg;
            console.log(this.error);
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
