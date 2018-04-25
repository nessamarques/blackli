import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public app: AppComponent;
  public router: Router;

  constructor( appComp: AppComponent, router: Router){
    this.app = appComp;
    this.router = router;
  }

  ngOnInit(): void { 
    if(!this.app.loggedUser){
      this.router.navigate(['/login']);
    }
    else{
      this.router.navigate(['/home']);
    }
  }
}
