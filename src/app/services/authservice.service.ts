import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  private isloggedIn: boolean;
  public userName: string | undefined;
  public Password: string | undefined;

  constructor() {
    this.isloggedIn=false
   }

   login(username: string = 'seyianjorin', password:string = 'seyi1234'){

     if(this.userName==username && this.Password==password){
      this.isloggedIn=true;
     }
     else{
       alert(`Wrong Username or Password`)
       this.isloggedIn=false;
     }
     return of(this.isloggedIn)
   }

   isUserLoggedIn(): boolean {
    return this.isloggedIn;
   }

   isAdminUuser(): boolean {
     if (this.userName == 'Admin'){
       return true;
     }
     return false;
   }

   logoutUser(): void{
     this.isloggedIn = false;
   }
}
