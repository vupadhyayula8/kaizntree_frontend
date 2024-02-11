import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path :'item',canActivate:[AuthGuard],component:ItemComponent},
  {path :'login',component:LoginComponent},
  {path :'register',component:CreateComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
