import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { EmployeeModule } from './employee/employee.module';
import { HeaderComponent } from './common/header/header.component';
import { HelloComponent } from './hello/hello.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloComponent,
    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    EmployeeModule,
    AppRoutingModule,
  ],
  exports:[HeaderComponent],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
