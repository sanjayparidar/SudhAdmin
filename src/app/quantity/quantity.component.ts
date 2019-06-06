import { Component, OnInit } from '@angular/core';
import { Myservice } from '../my.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
 public category: Array<any> = [];
 public table:any;
  constructor(public myServices:Myservice, private router:Router) { }

  ngOnInit() {
    this.myServices.viewquantity()
     .subscribe(res=>{
       this.table=res
       this.category=[1,2,5,10,15,20]
     })
    
  }
  
  
  userModel = {category:'', Quentity:''}
  onSubmit(){
    let obj = this.table.find(x => x.category === this.userModel.category);
    if(obj.category===this.userModel.category){
      obj.Quentity=this.userModel.Quentity
      this.myServices.editquantity(obj)
    .subscribe(res=>{
      this.userModel = {category:'', Quentity:''}
      console.log(res)
    })
    }else{
    this.myServices.addquantity(this.userModel)
    .subscribe(res=>{
      console.log(res)
    })
  }
  }  


}
