import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../shared/services/http-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit{
  
  content: any[] = [];
  userId : any;
  staff : any;
  
  constructor( private router: Router, private httpServe : HttpHandlerService) { }
  ngOnInit(): void {
    if (localStorage.length === 0) {
        this.router.navigate(['/login']);
      }

    this.httpServe.getUser().subscribe((data) => {
      for(let user of data){
        this.httpServe.getLeaves().subscribe((leaves)=>{
          for(let sLeave of leaves){
            this.userId = sLeave.staffId;
            if(this.userId === user.id){
              sLeave.fName = user.firstName;
              sLeave.lName = user.lastName;
              this.content.push(sLeave);
            }
          }
        })
      }
    })
  }
  onApprove(){
    
  }

  onReject(){
      
    }
  
   Logout(){
     localStorage.removeItem('user');
     this.router.navigate(['/login']);
   }


  }
