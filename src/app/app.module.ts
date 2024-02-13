import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';
import { CreateComponent } from './create/create.component';
import {MatIconModule} from '@angular/material/icon';
import { ResetComponent } from './reset/reset.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemComponent,
    CreateComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
