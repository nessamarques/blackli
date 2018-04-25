import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {

  public title: string = 'BlackLi';
  public router: Router;
  
  public username : string = '';
  public password : string = '';
  public email: string = '';

  public loggedUser : boolean = false;
  
  public usersList: { username: string, password: string, email: string }[] = [
      { "username": "Vanessa", "password": "admin","email": "admin"  }
  ];

  constructor(router: Router) {
    this.router = router;
   }

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }
}