import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private sessionService:SessionService,private router:Router) { }
  email:string=""
   password:string="" 
  
   login()
   {
    console.log(this.email);
    console.log(this.password);
    let user={
      "email":this.email,
      "password":this.password
    }
    this.sessionService.loginApi(user).subscribe(res=>{
      if(res.status == -1)
      {
        alert("Mayday!....")
      }
      else
      {
        console.log(res.data);
        if(res.data.userType.userTypeName == "User")
        {
          this.router.navigateByUrl("/customer/home")
          
        }else if(res.data.userType.userTypeName == "Admin")
        {
          this.router.navigateByUrl("/admin/dashboard")
        }else if(res.data.userType.userTypeName== "Vendor")
        {
          this.router.navigateByUrl("/vhome")
        }
        alert("welcome login done")
      }
    })
  }
   
  ngOnInit(): void {
    console.log("login called");
    
  
    
  }

}
