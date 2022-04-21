import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private rout: Router,private apiService:ApiService) { }

  ngOnInit(): void {
  }
  gotocreer(){
    this.rout.navigate(["/creerCompte"])}
    

}
