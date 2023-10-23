import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { TweetsComponent } from './tweets/tweets.component';
import { HomeComponent } from './home/home.component';
import { SpacesComponent } from './spaces/spaces.component';
import { StoriesComponent } from './stories/stories.component';
import { ChatComponent } from './chat/chat.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tweet', component: TweetsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'spaces', component: SpacesComponent },
      { path: 'stories', component: StoriesComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'reports', component: ReportsComponent },
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
