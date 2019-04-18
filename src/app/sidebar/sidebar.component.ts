import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private router:Router, public authService:AuthService) { }

  ngOnInit() {
  }


  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }

}
