 import { HttpClient } from "@angular/common/http";
 import { Injectable } from "@angular/core";
 import { map } from "rxjs";

 @Injectable()
 export class HttpHandlerService{

    apiUrl ='https://leave-mangement-system-default-rtdb.asia-southeast1.firebasedatabase.app/data.json';
     leaveUrl =  'https://leave-mangement-system-default-rtdb.asia-southeast1.firebasedatabase.app/leave-data.json';


     constructor(private http : HttpClient){}

     postRegister(registerObj : any){
         return this.http.post(this.apiUrl,registerObj)
     }
 
     getUser(){
         return this.http.get(this.apiUrl).pipe(map((sampleData : any)=>{
          let arr: any[] =[]
          for(let user in sampleData){
              arr.push({...sampleData[user], id:user})
          }
          return arr
         }),
        
         )
      }
      updateLeaveById(leaveObj : any){
       return this.http.patch('https://leave-mangement-system-default-rtdb.asia-southeast1.firebasedatabase.app/leave-data/'+leaveObj.id+'.json', leaveObj)
     }
        updateUserById(registerObj : any){
          return this.http.patch('https://leave-mangement-system-default-rtdb.asia-southeast1.firebasedatabase.app/data.json'+registerObj.id+'.json', registerObj)
        }
        getLeaveById(id : any){
          return this.http.get('https://leave-mangement-system-default-rtdb.asia-southeast1.firebasedatabase.app/leave-data/'+id+'.json')
        }
    
        getLeaveByStaffId(staffId :any){
          return this.http.get('https://leave-mangement-system-default-rtdb.asia-southeast1.firebasedatabase.app/leave-data/'+staffId+'.json')
        }
        getCurrentUser(){
         return localStorage.getItem('user')
    
       }

       leaveApply(leaveObj : any){
         return this.http.post(this.leaveUrl, leaveObj)
       }
     
      postLeave(leaveObj  :any){
        return  this.http.post(this.leaveUrl,leaveObj)
      }
      getLeaves(){
       return this.http.get(this.leaveUrl).pipe(map((sampleLeaveData : any)=>{
        let arr: any[] =[]
        for(let leave in sampleLeaveData){
            arr.push({...sampleLeaveData[leave], id:leave})
        }
        return arr
       }),
      
       )
    }

 }   
