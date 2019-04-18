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
  constructor(public myServices:Myservice, private router:Router) { }

  ngOnInit() {
    this.category=[5,10]
  }
  
  
  userModel = {category:'', quantity: ''}
  onSubmit(){
    this.myServices.addquantity(this.userModel)
    .subscribe(res=>{
      console.log(res)
    })
    
    
  }  


}
