import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHandlerService } from '../shared/services/http-handler.service';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm : any;

  constructor(private router : Router ,private httpServe : HttpHandlerService){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username : new FormControl('' ,Validators.required),
      password : new FormControl('' ,Validators.required)
  })
}

// getAvilableRegister(){
//   this.httpServe.getUser().subscribe((data :any)=>{
//     console.log(data)
//   })
// }
onSubmit(){
   console.log(this.loginForm.value);
  // this.httpServe.getUser().subscribe((data : any)=>{
  //   console.log(data)
    this.httpServe.getUser().subscribe((res: any) =>{

      console.log(this.loginForm.value);
      for(let user of res){
        console.log(user.username)
        console.log(this.loginForm.value.username )

        if(user.username === this.loginForm.value.username && user.password === this.loginForm.value.password){
          localStorage.setItem('username',this.loginForm.value.username);
          localStorage.setItem('id',this.loginForm.value.id);
          if(user.role === 'HOD'){
            this.router.navigate(['/hod'])
          }else{
            this.router.navigate(['/staff'])
          } 
          alert("successfully login")

        }
      }  
    })
  }    
}
