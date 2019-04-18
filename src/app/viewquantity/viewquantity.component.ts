import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service';

@Component({
  selector: 'app-viewquantity',
  templateUrl: './viewquantity.component.html',
  styleUrls: ['./viewquantity.component.css']
})
export class ViewquantityComponent implements OnInit {
  public table:any;
  public quentity={ }
  constructor(public myservice:Myservice) { }

  ngOnInit() {
     this.myservice.viewquantity()
     .subscribe(res=>{
       this.table=res
       console.log(this.table)
     })
  }

  userModel = {category:'', Quentity: ''}

onSubmit(data){
  console.log("hello")
    this.userModel=data
    console.log(this.userModel)
    this.myservice.editquantity(this.userModel)
    .subscribe(res=>{
      console.log(res)
    })

  }

  editask(u){
    console.log(u)
    this.userModel=u

  }

}
