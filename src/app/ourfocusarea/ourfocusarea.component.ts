import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ourfocusarea',
  templateUrl: './ourfocusarea.component.html',
  styleUrls: ['./ourfocusarea.component.css']
})
export class OurfocusareaComponent implements OnInit {

  constructor(private router:Router) { }
Donate()
{
 
  this.router.navigate(['/login'])
}
  ngOnInit() {
  }

}
