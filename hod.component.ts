import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../shared/services/http-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hod',
  templateUrl: './hod.component.html',
  styleUrls: ['./hod.component.css']
})
export class HodComponent implements OnInit{
 
  
  constructor( private router: Router, private httpServe : HttpHandlerService) { }
  ngOnInit(): void {
    
       
  
   Logout(){
     localStorage.removeItem('user');
     this.router.navigate(['/login']);
   }


  }
