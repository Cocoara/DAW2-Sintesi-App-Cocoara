import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private session: SessionService, private router: Router) { 
    if(this.session.user.token == ""){
    this.router.navigate(["/login"]);
    }
  }
 


  ngOnInit() {}


  logout(){
    this.session.logout().subscribe(
      (response: any) => {
        this.session.deleteUserSession();
        this.router.navigate(["/"]);
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
}
