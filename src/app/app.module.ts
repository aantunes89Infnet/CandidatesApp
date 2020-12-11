import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SharedModule } from './shared/shared.module';
import { CandidatesModule } from './candidates/candidates.module';

@NgModule({
  declarations: [AppComponent, MainComponent, MainNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CandidatesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
