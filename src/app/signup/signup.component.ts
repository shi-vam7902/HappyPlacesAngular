import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router,private sessionservice:SessionService) { }
  FirstName: string = ""
  LastName: string = ""
  email: string = ""
  password: string = ""
  userType: string = ""

  firstNameError = "";
  lastNameError = "";
  emailError = "";
  passwordError = "";
  userTypeError = "";

  signup() {
    let isError = false
    console.log(this.FirstName);
    console.log(this.LastName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.userType);

    if (this.FirstName == "" || this.FirstName.trim().length == 0) {
      this.firstNameError = "Please Enter FirstName"
      isError = true
    }
    else {
      this.firstNameError = ""
    }
    // firstName null 

    if (this.LastName == "" || this.LastName.trim().length == 0) {
      this.lastNameError = "Please Enter lastName"
      isError = true
    }
    else {
      this.lastNameError = ""
    }
    //lastname null
    if (this.email == "" || this.email.trim().length == 0) {
      this.emailError = "Please Enter email"
      isError = true
    }
    else {
      this.emailError = ""
    }
    // email null 

    if (this.password == "" || this.password.trim().length == 0) {
      this.emailError = "Please Enter Password"
      isError = true
    }
    else if (this.password.trim().length <= 3) {
      this.passwordError = "The max length of password should be 4 char"
      isError = true
    }
    else {
      this.passwordError = ""
    }

    if (this.userType == "" || this.userType.trim().length == 0) {
      this.userTypeError = "Enter the Correct Role"
      isError = true
    }
    else {
      this.userTypeError = ""
    }

    // validaton - format
    // email duplicate 
    if (isError == true) {

    } else {
      let user={
        "firstname":this.FirstName,
        "lastname":this.LastName,
        "email":this.email,
        "password":this.password,
        "userType":"634e5e0a62b34d045f2d3f1b"
      }
      this.sessionservice.signupApi(user).subscribe(res=>{
        console.log("SignupApi()->response");
        console.log(res);
        if(res.status == 200)
        {
          this.router.navigateByUrl("/login")
        }
        else{
          alert("Something went Wrong")
        }

        
      })
    }
  }

  ngOnInit(): void {
    console.log("Sign Page");

  }

}
