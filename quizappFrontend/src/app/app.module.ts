import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuiztestComponent } from './components/quiztest/quiztest.component';
import { StudentComponent } from './components/student/student.component';
import { ResultpageComponent } from './components/resultpage/resultpage.component';
import { ResultfailComponent } from './components/resultfail/resultfail.component';
import { StudenthomepageComponent } from './components/studenthomepage/studenthomepage.component';
import { GradebookComponent } from './components/gradebook/gradebook.component';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { QuizlistComponent } from './components/quizlist/quizlist.component';
import { StudentslistComponent } from './components/studentslist/studentslist.component';
import { QuizquestionsComponent } from './components/quizquestions/quizquestions.component';
import { StudentperformanceComponent } from './components/studentperformance/studentperformance.component';

const route : Routes = [
  {path: '',  component:LoginComponent},
  {path:'student', component: StudentComponent},
  {path : 'quiz/:quizId' , component : QuizComponent},
  {path : 'test/:categoryName' , component : QuiztestComponent},
  {path :'result' ,component : ResultpageComponent},
  {path : 'resultfail',component : ResultfailComponent},
  {path : 'stu_homepage',component : StudenthomepageComponent},
  {path : 'gradebook' , component : GradebookComponent},
  {path : 'admin' , component : AdminhomepageComponent},
  {path : 'studentlist' , component : StudentslistComponent},
  {path : 'quizlist', component : QuizlistComponent},
  {path : 'quizquestion/:quizId',component : QuizquestionsComponent},
  {path : 'studentperformance/:userid',component : StudentperformanceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    QuiztestComponent,
    StudentComponent,
    ResultpageComponent,
    StudenthomepageComponent,
    GradebookComponent,
    AdminhomepageComponent,
    QuizlistComponent,
    StudentslistComponent,
    QuizquestionsComponent,
    StudentperformanceComponent
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
