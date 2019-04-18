import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 public table:any;
 closeResult: string;
  constructor(public myservice:Myservice) { }

  ngOnInit() {
    this.myservice.viewquantity()
    .subscribe(res=>{
      this.table=res
      console.log(this.table)
    })
 }

 edit(data){
   this.myservice.editquantity(data)
   .subscribe(res=>{
     console.log(res)
   })

 }




}
