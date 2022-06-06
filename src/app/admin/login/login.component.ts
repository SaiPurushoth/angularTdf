import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardServiceService } from './authguard-service.service';
import { User } from './user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name=""
userModel= new User("","","","",0);
constructor(private auth:AuthguardServiceService,private route:Router){

}
ngOnInit(): void { 
}

onClick(user:string,pass:string)
{  
 this.auth.setUsername(user);
 this.auth.setPassword(pass);
 
if(this.auth.isLoggedIn())
{
this.route.navigate(['/admin/home']);
}


}

}
