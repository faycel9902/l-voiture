import { Data } from '@angular/router';

export interface User {
  id?: any;
  avatar?: string;
  name?: string;
  email?: string;
}
export interface Admin {
  id?: any;
  photo?: string;
  name?: string;
  email?: string;
}
export interface UserLoginPayoad {
  email: string;
  password: string;
}
export interface UserAuthPayLoad {
  email: string;
  password: string;
}
export interface UserAgency {
  id?: any;
  name?: string;
  address?: string;
  photo?: string;
  phoneNumber?: string;
}
export interface Car {
  id?: any;
  color?: string;
  fuel?: string;
  numberPlaces?: string;
  photo?: string;
  price?: string;
  brand?: Brand;
}
export interface Brand {
  id?: any;
  name?: string;
}
export interface Contract {
  id?: any;
  startDate?: Date;
  beginningHour?: string;
  returnHour?: string;
  returnDate?: Data;
}
export interface Agency {
  id?: any;
  name?: string;
  address?: string;
  logo?: string;
  phoneNumber: string;
  mail: string;
}
