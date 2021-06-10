import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string = "";
  public password: string = "";

  public loginError: boolean = false;
  
  constructor(private session: SessionService, private router: Router) { }

  ngOnInit() {}


  login(){
    this.session.login(this.username, this.password).subscribe(
      (response: any) => {
        let user: User = new User();
        user.id = response.body.user.id;
        user.user = response.body.user.username;
        user.token = response.body.token;
        user.group = response.body.userGroup[0].group_id;
        this.session.user = user; 
        
        this.loginError= false;
        this.redirectTo('/tabs/inicio');
      },
      (error: any) => {
        this.session.deleteUserSession();
        this.loginError = true;
      }
    );
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
