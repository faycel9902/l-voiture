import { Injectable } from '@angular/core';
import { ListFilter } from 'src/interfaces/Pagination';
import { User, UserAuthPayLoad, UserLoginPayoad } from 'src/interfaces/User';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private usersCollection: AngularFirestoreCollection<User>;
  $users: Observable<User[]>;
  constructor(public auth: AngularFireAuth, public afs: AngularFirestore) {
    this.usersCollection = this.afs.collection<User>('users');
    this.$users = this.usersCollection.valueChanges();
    this.testData()
  }

  testData(){
   //✔️ this.usersCollection.doc('123456').set({name:'test'})

 
  }

  //* ======>gitHub<========

  //* ======>new branch<========
  //?=============>Auth<=============================
  registerUser(payload: UserAuthPayLoad,userPayload:User) {
    let password = payload.password;
    let email = payload.email;
    this.auth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        console.log(res);
        let resUser = res.user
        if(resUser && resUser.uid){
          let id  = resUser.uid;
        //  let email;
          let avatar ='default'
          let createdAt = new Date();
          let isAdmin = false;
        //  let name = email.split('@')[0]; 
        let firstName = userPayload.firstName ; 
        let lastName = userPayload.lastName ; 
          let user:User = {id,email,avatar,createdAt,isAdmin,firstName,lastName}

           this.addUser(user)
        }
      
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addUser(payload:User){
    this.usersCollection.doc(payload.id).set(payload)
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
  addBrand(name: string) {}
  //?=============>brand<=============================
}
