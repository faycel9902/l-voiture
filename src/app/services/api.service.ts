import { Injectable } from '@angular/core';
import { ListFilter } from 'src/interfaces/Pagination';
import { UserAuthPayLoad, UserLoginPayoad } from 'src/interfaces/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public auth: AngularFireAuth) {}

//* ======>gitHub<========

//* ======>new branch<========
  //?=============>Auth<=============================
  addUser(payload: UserAuthPayLoad) {
    let password = payload.password;
    let email = payload.email;
    this.auth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loginUser(payload: UserLoginPayoad) {}
  logout() {}

  //?=============>Auth<=============================

  //?=============>User<=============================
  deleteUser(id: any) {}
  updateUser(payload: any) {}
  sendMailToAdmin(payload: any) {}
  //?=============>User<=============================

  //?=============>Agency<=============================
  createAgencey(payload: any) {}
  sendMailToAgency(payload: any) {} //post request
  agencies(params?: ListFilter) {} //get request
  
  //?=============>Agency<=============================

  //?=============>Car<=============================
  addCar(payload: any) {}
  deleteCar(id: any) {}
  updateCar(payload: any) {}
  //?=============>car<=============================

  //?=============>cantract<==========================
  addContract(payload: any) {}
  deleteCantract(id: any) {}
  updateCantract(payload: any) {}
  //?=============>cantract<==========================

  //?=============>brand<=============================
  addBrand(payload: any) {}
  //?=============>brand<=============================
}
