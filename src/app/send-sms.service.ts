import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface  sms{
  phone: string;
  text :string;
}

@Injectable( {
  providedIn: 'root'
} )

export class SendSmsService {

  user:string ="";
  password:string  = "";
  src: string = ""
  url= "";
 
  constructor( private http: HttpClient ) {
    this.url='https://api.lleida.net//sms/v2/';
    this.user = "user1@proves_frontend";
    this.password = "prova1234";
    this.src = "TestingTests";
  }
 
  sendMessage( data: sms ) {
    
    let sendData = {
        sms: 
          {
            user:this.user, 
            password:this.password, 
            src:this.src, 
            dst:
            {
              "num":[  data.phone]
            },
            txt: data.text
          }
    }
    return this.http.post( this.url, sendData );
  }
  
  
}


