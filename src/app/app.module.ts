import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { PlayerComponent } from './shared/components/player/player.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {IconsModule } from './shared/modules/icons/icons.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgScrollbarModule } from 'ngx-scrollbar';
import * as bootstrap from "bootstrap"
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api-service.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGaurdService } from './shared/services/auth-gaurd.service';
import { CardComponent } from './shared/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    PlayerComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    IconsModule,
    FlexLayoutModule,
    NgScrollbarModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGaurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
