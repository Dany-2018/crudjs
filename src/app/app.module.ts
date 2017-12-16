import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

const router: Routes = [
  { path: ':status', component: EstudianteComponent},
  { path: '**', redirectTo: '/all' }
]; 

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
