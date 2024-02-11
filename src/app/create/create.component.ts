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
    password :new FormControl('',Validators.required),
    confirmpassword :new FormControl('',Validators.required)
   })
   registered = false;
   OnSubmit()
  {
    if(this.registerForm.valid)
    {
      //loginData:Login
      this.apiService.register(this.registerForm.value.name,this.registerForm.value.password).subscribe(
        (resp)=>
        {
          if(resp.status == 200)
          {
            if(resp == true)
            {
              this.registered = true;
              this.router.navigateByUrl('/login');
            }
            else
            {
              this.registered = false;
            }
          }
        }
      );
    }
  }
  // checkPasswords:ValidatorFn = (group:AbstractControl):ValidationErrors |null =>{
   
  //    pass = group.get('password').value;
  //   let confirmPass = group.get('confirmPassword').value;
  //   return pass === confirmPass ? null : { notSame: true }
  // }
}
