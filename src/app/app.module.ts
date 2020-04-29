import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkillsetComponent } from './home/skillset/skillset.component';
import { ABitAboutComponent } from './home/aBitAbout/aBitAbout.component';
import { DevelopementBackpackComponent } from './home/developementBackpack/developementBackpack.component';
import { TechnologyComponent } from './home/developementBackpack/technology/technology.component';
import { ToolsIuseComponent } from './home/toolsIuse/toolsIuse.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      SkillsetComponent,
      ABitAboutComponent,
      DevelopementBackpackComponent,
      TechnologyComponent,
      ToolsIuseComponent,
      FooterComponent
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
