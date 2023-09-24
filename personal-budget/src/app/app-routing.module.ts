
import { NgModule,Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { ArticleComponent } from './article/article.component';
const routes: Routes =[
  {
    path:'',
    component:HomepageComponent,
    pathMatch:'full'
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    component:P404Component
  }
];


@NgModule({

  imports: [RouterModule.forRoot(routes), // Import and configure RouterModule with your routes
  ],
  exports: [RouterModule], // Export RouterModule to make it available to other modules
})
export class AppRoutingModule { }
