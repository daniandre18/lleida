import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators} from '@angular/forms';
import { SendSmsService } from 'src/app/send-sms.service';



@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})


export class SendSmsComponent implements OnInit {

  constructor( private sms: SendSmsService ) { }
  addData=new FormGroup( {
    phone: new FormControl( '', Validators.required ),
    text: new FormControl( '' , Validators.required),
  } );
  message: boolean=false;
  ngOnInit(): void {
  }
 

  SaveData() {

    this.sms.sendMessage( this.addData.value ).subscribe( ( result ) => {
      console.log( result );
      this.message=true;
      this.addData.reset( {} );
    } );

    
  }

  removeMessage() {
    this.message=false;
  }


}

