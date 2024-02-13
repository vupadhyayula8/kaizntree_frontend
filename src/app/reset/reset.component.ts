import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
   constructor(private apiService:ApiServiceService,private router:Router){}
  resetForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]),
    password :new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$')]),
    confirmpassword :new FormControl('',Validators.required)
   })
   registered = false;
   OnSubmit()
  {
    if(this.resetForm.valid)
    {
      this.apiService.register(this.resetForm.value.name,this.resetForm.value.password).subscribe(
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
}
