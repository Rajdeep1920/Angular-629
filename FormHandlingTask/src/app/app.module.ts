import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { FormsModule } from '@angular/forms';
import { StudentInfoComponent } from './student-info/student-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFeedbackComponent,
    StudentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
