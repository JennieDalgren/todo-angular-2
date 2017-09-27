import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlaygroundPageComponent } from './pages/playground-page/playground-page.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { TaskColumnComponent } from './components/task-column/task-column.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundPageComponent,
    TaskCardComponent,
    TaskColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
