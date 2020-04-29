import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HomepagecontentComponent } from './homepagecontent/homepagecontent.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepagecontentComponent
  },
  {
    path: 'home',
    component: HomepagecontentComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
