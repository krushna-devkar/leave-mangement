import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from '../shared/services/http-handler.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm : any;

  constructor(private httpServe : HttpHandlerService){}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      role : new FormControl('',Validators.required),
      fname : new FormControl('' ,Validators.required),
      lname : new FormControl('' ,Validators.required),
      email : new FormControl('' ,Validators.required),
      contact : new FormControl('' ,[Validators.required,Validators.minLength(10)]),
      department: new FormControl('' ,Validators.required),
      username : new FormControl('' ,Validators.required),
      password : new FormControl('' ,Validators.required)
   })
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.httpServe.postRegister(this.registerForm.value).
    subscribe((data  :any)=>{
      console.log(data)
    })
        this.registerForm.reset();
        localStorage.setItem('id',this.registerForm.value.id);
        localStorage.setItem('department',this.registerForm.value.department);
        localStorage.setItem('role',this.registerForm.value.role);


      }
     
      
  


}
      
