import { Component, OnInit } from '@angular/core';
import { UserAuthPayLoad } from 'src/interfaces/User';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService) {
    let user : UserAuthPayLoad = {
      email:'test5@app.com',
      password:'123456'///
    }
  //  this.apiService.registerUser(user)
   }

  ngOnInit(): void {
  }

}
