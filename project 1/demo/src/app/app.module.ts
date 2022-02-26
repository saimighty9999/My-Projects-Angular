import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomertableComponent } from './customertable/customertable.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TabledataService } from './service/Tabledata.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomertableComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [TabledataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
