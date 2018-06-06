import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { EditProcessComponent } from './component/edit-process/edit-process.component';
import { CreateProcessComponent } from './component/create-process/create-process.component';
import { RunProcessComponent } from './component/run-process/run-process.component';
import { EditPageComponent } from './page/edit-page/edit-page.component';
import { CreatePageComponent } from './page/create-page/create-page.component';
import { RunPageComponent } from './page/run-page/run-page.component';
import { appRoutes } from './app.route';
import { SharedService } from './service/shared.service';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProcessService } from './service/process/process.service';
import { ListProcessComponent } from './component/list-process/list-process.component';



@NgModule({
  declarations: [
    AppComponent,
    EditProcessComponent,
    CreateProcessComponent,
    RunProcessComponent,
    EditPageComponent,
    CreatePageComponent,
    RunPageComponent,
    ListProcessComponent,

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,

  ],
  providers: [ProcessService,
    SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
