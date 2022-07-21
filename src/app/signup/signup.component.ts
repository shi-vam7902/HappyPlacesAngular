import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) {}
  FirstName : string=""
  LastName : string=""
  email : string=""
  password : string=""

  firstNameError ="";
  lastNameError = "";
  emailError ="";

  signup()
  {
    console.log(this.FirstName);
    console.log(this.LastName);
    console.log(this.email);
    console.log(this.password);
    
  // validation-required
    let isError = false;
    if(this.FirstName == "" || this.FirstName.trim().length == 0)
    {
      isError = true;
      this.firstNameError="Please Enter FirstName"
    }
    else
    {
      this.firstNameError="";
    }
    if (this.LastName == "" || this.LastName.trim().length==0) {
      isError = true;
      this.lastNameError="Please Enter LastName";
    }
    else{
      this.lastNameError="";
    }
    if (this.email == "" || this.email.trim().length==0) {
      isError = true;
      this.emailError = "Please Enter Email";
    }
    else
    {
      this.emailError="";
    }
    if(isError == true)
    {
      
      console.log("Error");
      
    }else{
      this.router.navigateByUrl("/login")
      
      
    }
    

  // validaton - format
  // email duplicate 
  // db save
  
    
        
  }
  
  ngOnInit(): void {
    console.log("Sign Page");
    
  }

}
