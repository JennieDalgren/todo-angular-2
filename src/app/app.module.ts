import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';

import { TaskService } from './services/task.service';

import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskColumnComponent } from './components/task-column/task-column.component';

// import router

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'playground', component: PlaygroundPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundPageComponent,
    TaskCardComponent,
    TaskColumnComponent,
    TasksPageComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
