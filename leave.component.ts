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
 onApprove(lId:any, sId: any, index :number){
    let statusObj = {
          status : 'Approved',
          id : lId
    }
    this.httpServe.updateLeaveById(statusObj).subscribe();
    this.httpServe.getUser().subscribe((res) => {
      this.staff = res.find((user) => user.id === sId);
      let totalLeaves = this.staff.status.totalLeaves
      let totalApprove =this.staff.status.approved;
      this.httpServe.getLeaveById(lId).subscribe((leave : any) => {
        let updateStatus ={
          id : sId,
          "status/totalLeaves":  totalLeaves - leave.noOfDays,
          "status/approved":   leave.noOfDays+totalApprove,
        }
        this.httpServe.updateUserById(updateStatus).subscribe()
      })
    });
    if (index !== -1) {
      this.content.splice(index, 1);
     
    }
  }

  onReject(lId:any, sId: any,  index :number){
      let statusObj = {
            status : 'Rejected',
            id : lId
      }
      this.httpServe.updateLeaveById(statusObj).subscribe();
    this.httpServe.getUser().subscribe((res) => {
      this.staff = res.find((user) => user.id === sId);
      let totalDays = this.staff.status.totalLeaves
      let totalReject =this.staff.status.rejected;
      this.httpServe.getLeaveById(lId).subscribe((leave : any) => {
        let updateStatus ={
          id : sId,
          "status/totalLeaves": totalDays-leave.noOfDays,
          "status/rejected":  leave.noOfDays+totalReject,
        }
        this.httpServe.updateUserById(updateStatus).subscribe();
      })
    });
    if (index !== -1) {
      this.content.splice(index, 1);
      alert('Leave get Rejected');
    }
  }
}
