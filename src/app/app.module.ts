import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversorComponent } from './conversor/conversor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DivisasService } from './divisas.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
