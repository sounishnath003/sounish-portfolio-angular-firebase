import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepagecontentComponent } from './homepagecontent/homepagecontent.component';
import { ResumeComponent } from './about/resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectcardDetailsComponent } from './projects/projectcard/projectcard-details/projectcard-details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepagecontentComponent
  },
  {
    path: 'home',
    redirectTo: '',
    component: HomepagecontentComponent
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projects/project-details',
    component: ProjectcardDetailsComponent,
  },
  {
    path: 'about/resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
