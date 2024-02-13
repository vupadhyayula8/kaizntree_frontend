import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
   constructor(private apiService:ApiServiceService,private router:Router){}
  registerForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
    password :new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$')]),
    confirmpassword :new FormControl('',Validators.required)
   })
   registered = false;
   error:string ="";
   OnSubmit()
  {
    if(this.registerForm.valid)
    {
      this.apiService.register(this.registerForm.value.name,this.registerForm.value.password).subscribe(
        (resp)=>
        {
          console.log(resp);
          if(resp.status)
          {
            
              this.registered = true;
              this.router.navigateByUrl('/login');
          }
            else
            {
              this.error = resp.msg;
              this.registered = false;
            }
          
        }
      );
    }
  }
}
  export const checkPasswordsValidator:ValidatorFn = (group:AbstractControl):ValidationErrors |null =>{
   
     let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true }
  }
