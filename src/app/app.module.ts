import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { MainFooterComponent } from './shared/main-footer/main-footer.component';
import { Err404pageComponent } from './shared/err404page/err404page.component';
import { Global } from './core/Models/global';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './main/start/start.component';
import { ArrComponent } from './arrangemang/arr/arr.component';
import { HeaderComponent } from './shared/header/header.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { NavArrlistComponent } from './main/nav-arrlist/nav-arrlist.component';
import { ArrlistComponent } from './main/arrlist/arrlist.component';
import { MotesplatsComponent } from './main/motesplats/motesplats.component';

@NgModule({
  declarations: [
    AppComponent,
    Err404pageComponent,
    MainFooterComponent,
    ScrollToTopComponent,
    StartComponent,
    ArrComponent,
    HeaderComponent,
    WelcomeComponent,
    NavArrlistComponent,
    ArrlistComponent,
    MotesplatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    Global,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
