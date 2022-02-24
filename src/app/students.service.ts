import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable( {
  providedIn: 'root'
} )

export class StudentsService {

  provider:any ="";
  password:any  = "";
  url= "";
 

  constructor( private http: HttpClient ) {

    this.provider = localStorage.getItem("provider");
    this.password = localStorage.getItem("password");
    this.url='https://api.lleida.net/admin/v2?provider='+this.provider+'&password='+this.password+'&request=list';

    console.log("this.provider ", this.provider );
    console.log("this.password ", this.password );
    
  }

  getAllStudent() {
    console.log("url",this.url)
    return this.http.get( this.url );
  }
  saveStudentData( data: any ) {
    console.log( data );
    return this.http.post( this.url, data );
  }
  deleteStudent( id: any ) {
    return this.http.delete( `${this.url}/${id}` );
  }
  getStudentById( id: number ) {
    return this.http.get( `${this.url}/${id}` );
  }
  updateStudentData( id: number, data: any ) {
    return this.http.put( `${this.url}/${id}`, data );
  }
  
}
