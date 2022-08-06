import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuiztestComponent } from './components/quiztest/quiztest.component';
import { StudentComponent } from './components/student/student.component';

const route : Routes = [
  {path: '',  component:LoginComponent},
  {path:'student', canActivate:[AuthGuard] , component: StudentComponent},
  {path : 'quiz/:quizId' , canActivate:[AuthGuard] , component : QuizComponent},
  {path : 'test/:categoryName' , canActivate:[AuthGuard] ,component : QuiztestComponent}]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    QuiztestComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
