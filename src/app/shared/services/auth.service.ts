import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new Subject<boolean>()

  user!:string| null
  constructor(private router:Router) { }

  public currentUser(){
      if(!this.user){
      this.user =  localStorage.getItem('currentUser-spotifyClient')
      }

      return this.user
  }

  public login(userToken:string){
  localStorage.setItem('currentUser-spotifyClient',userToken)
  this.authSubject.next(this.isAuthenticated())
  this.user=  localStorage.getItem('currentUser-spotifyClient')
  }

  public logout(){
    localStorage.clear()
    this.authSubject.next(this.isAuthenticated())
    this.router.navigate(['/'])
  }

  public isAuthenticated(){
    if(localStorage.getItem('currentUser-spotifyClient')){
      // this.authSubject.next(this.isAuthenticated())
      return true
    }else{
      return false
    }
  }


}
