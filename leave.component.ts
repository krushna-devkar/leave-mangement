import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHandlerService } from '../shared/services/http-handler.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements  OnInit{

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
}