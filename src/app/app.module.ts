import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { MainModule } from './main/main.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    MainModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    UserModule
  ],
  exports: [MatPaginatorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
