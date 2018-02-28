import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms'


import { AppComponent } from './app.component';
import { SimpleListComponent } from './simple-list/simple-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
