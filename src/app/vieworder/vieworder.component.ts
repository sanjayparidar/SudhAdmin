import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
 public table:any;
  constructor( private myservice:Myservice , private router:Router) { }
   
  ngOnInit() {
    this.myservice.vieworder()
    .subscribe(res=>{
      this.table=res
      console.log(this.table)
    })
    
  }

}
