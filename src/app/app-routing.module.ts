import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { SendSmsComponent } from './components/send-sms/send-sms.component';

const routes: Routes=[
  {
    path: 'add',
    component: AddStudentComponent
  },
  {
    path: 'edit/:id',
    component: EditStudentComponent
  },
  {
    path: 'list',
    component: ListStudentComponent
  },
 
  {
    path: 'sms',
    component: SendSmsComponent
  }
];

@NgModule( {
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
