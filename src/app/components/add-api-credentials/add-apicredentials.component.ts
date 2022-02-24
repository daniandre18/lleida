import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { StudentsService } from '../../students.service';

@Component( {
  selector: 'app-add-apicredentials',
  templateUrl: './add-apicredentials.component.html',
  styleUrls: ['./add-apicredentials.component.css']
} )
export class AddStudentComponent implements OnInit {

  constructor( private student: StudentsService ) { }
  addData=new FormGroup( {
    provider: new FormControl( '', Validators.required ),
    password: new FormControl( '' , Validators.required),
  } );
  message: boolean=false;
  ngOnInit(): void {
  }
  SaveData() {
    localStorage.removeItem("provider");
    localStorage.removeItem("password");
    localStorage.setItem('provider', this.addData.controls['provider'].value);
    localStorage.setItem('password',this.addData.controls['password'].value);
    this.message = true;
    this.addData.reset( {} );
  }
  removeMessage() {
    this.message=false;
  }


}
