import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tp2Component } from './component/tp2/tp2.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {InteractoModule} from 'interacto-angular';

@NgModule({
  declarations: [
    AppComponent,
    Tp2Component
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DragDropModule,
        InteractoModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
