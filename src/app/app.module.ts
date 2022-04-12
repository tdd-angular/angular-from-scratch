import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApproveComponent } from './approve/approve.component';
import { RejectComponent } from './reject/reject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApproveComponent,
    RejectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
