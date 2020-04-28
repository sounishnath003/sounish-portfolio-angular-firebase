import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsetComponent } from './home/skillset/skillset.component';
import { ABitAboutComponent } from './home/aBitAbout/aBitAbout.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SkillsetComponent,
      ABitAboutComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
