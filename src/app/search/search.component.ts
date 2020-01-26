import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  foundationlist:any;
  constructor() { 
    this.foundationlist=[
      {'id':1,'name':'Being Human','description':'Orphanage','fund':'450000','account':'*****','ifsc':'SBIN001234'},
      {'id':2,'name':'Lions Club','description':'Education','fund':'550000','account':'*****','ifsc':'SBIN001234'},
      {'id':3,'name':'Healing India','description':'Healthcare','fund':'650000','account':'*****','ifsc':'SBIN001234'},

    ];
  }

  ngOnInit() {
  }


  
}
