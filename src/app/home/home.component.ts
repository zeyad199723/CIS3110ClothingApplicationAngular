import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector:
 
'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class
 
HomeComponent
 
{

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}