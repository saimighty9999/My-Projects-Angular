import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "registration", component:RegistrationComponent},
  {path: "checkbox", component:CheckboxComponent},
  {path:"",redirectTo:"checkbox",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
