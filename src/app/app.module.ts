import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { DialogComponent, DialogTemplateComponent } from './dialog/dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { DemoMaterialModule } from './mat.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HelpComponent } from './help/help.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    DialogComponent,
    DialogTemplateComponent,
    HelpComponent,
    TaskCardComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,    
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    OverlayModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
