import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './components/details/details.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegistrationComponent } from './components/registeration/registeration.component';



const routes:Routes = [{path:'',component:RegistrationComponent} ,
                {path:'register' , component:RegistrationComponent},
                {path:'profile',component:ProfileComponent} ,
                {path:'details/:id',component:DetailsComponent} ,
                {path:'**',component:ErrorComponent} ,
];
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    ErrorComponent,
    HeaderComponent,
    ProfileComponent,
    RegistrationComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
