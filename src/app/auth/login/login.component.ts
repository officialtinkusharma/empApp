import { Component, OnInit } from '@angular/core'
import { Router, RouteReuseStrategy } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logindata={"username":"","password":""}
  constructor( private route:Router) { }

  ngOnInit(): void {
  }

  login(){
    if((this.logindata.username==='tinku')&&(this.logindata.password==='tttt')){
      this.route.navigate(['/emp']);
      alert("SuccessFully Login")
    }
    else{
      alert("User Name or Password is wrong");
    }
  }
}
