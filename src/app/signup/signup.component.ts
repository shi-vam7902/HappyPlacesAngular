import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  FirstName : string=""
  LastName : string=""
  email : string=""
  password : string=""

  printData()
  {
    console.log(this.FirstName)
    console.log(this.LastName)
    console.log(this.email)
    console.log(this.password)
    
  }

  

  ngOnInit(): void {
  }

}
