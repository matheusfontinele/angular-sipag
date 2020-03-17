import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListarComercioComponent } from './listar-comercio/listar-comercio.component';
import { ComercioService } from './comercio.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ListarComercioComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ComercioService]
})
export class AppModule { }
