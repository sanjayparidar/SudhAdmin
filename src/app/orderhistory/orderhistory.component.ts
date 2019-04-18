import { Component, OnInit } from '@angular/core';
 import { Myservice } from '../my.service'
import { table } from './order'
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {
res : table [] = [];
table : any;
public user={"category":"",_id:""};

private bodyText: string;


  constructor(private myservices: Myservice, private router: Router,  public authService: AuthService) { }

  ngOnInit() {
    this.myservices.ViewProduct()
    .subscribe(res =>{
       this.table = res
      //  for(var i= 0; i<this.table.length; i++)
      //  {
      //    console.log('ssxsxsxsxsxsxs',this.table[i].name);
      //     console.log(i);
      //  }
     //  console.log('this is name key' , this.table); 
      // console.log(i);
   console.log(res);
    })
  }

  
  onEditUser(id){
    
    this.myservices.ButtonUpdate(id)
    .subscribe(res => {
      this.table = res
      console.log('this is name key' , this.table); 
     
console.log(res)
this.router.navigate(['/users',id]);
    });
  }

myFunction(id) {
    
  var index= this.table.findIndex(i => i._id === id);
    console.log(index)
    this.table.splice(index,1)
      
       this.myservices.Deleteproduct(id)
      .subscribe(res =>  {
       this.table = res
       
       console.log(res)
      
     },
       error =>{
         console.log(error)
        
       }
     );
   
  }

  // deleteuser(id){
  //   confirm('Are you sure Delete This  !! :-')
  //   console.log(id)
  //     const i =   this.myservices.Deleteproduct(id)
  //    .subscribe(res =>  {
  //     this.table = res
  //     this.table.splice(i,0)
  //     this.router.navigate(['/orderhistory']);
  //     console.log(res)
     
  //   },
  //     error =>{
  //       console.log(error)
       
  //     }
  //   );
  // }


  
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }

  deleteconfirmation(u){
     this.user=u
     console.log(this.user,"hello ==========================")
  }

  


}
