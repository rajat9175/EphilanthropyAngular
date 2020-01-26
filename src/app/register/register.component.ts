import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = '';
  role = '';
  email = '';
  password = '';
  phone = '';

  constructor(
    private router: Router,
    private service: DataService) { }

  ngOnInit() {
  }

  onSignup() {
    
  }

  onCancel() {
    this.router.navigate(['/login']);
  }

}
