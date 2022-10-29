import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import  ClientOAuth2 from 'client-oauth2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authSubject = new Subject<boolean>()

  user!:string| null
  facebookAuth: any;
  twitterAuth: any;
  googleAuth: any;
  spotifyAuth:any;
  constructor( private router:Router) {
   
    this.spotifyAuth = new ClientOAuth2({
      clientId: '8999086f97d2465887da133cf71f903a',
      clientSecret: '6bcc8ed027e24b3c98f46b40457dfa3f',
      accessTokenUri: "https://accounts.spotify.com/api/token",
      authorizationUri: "https://accounts.spotify.com/authorize",
      redirectUri: 'http://localhost:5000/spotify', // This URL is the same as the app url and we need to handle this UI wise i,e if access token is present then show some loading icon
      scopes: [
        "playlist-read-private",
      ]
      ,state:'qwertyqwertyqwer'
      
    });
    this.checkForAccessToken();
  }
  async checkForAccessToken() {
    // Inder - Here we basically need to put a check whether it contains the accessToken or not
    try {
      const response = await this.spotifyAuth.token.getToken(
        window.location.href
      );
      // If response - Hit backend to login the user
      console.log("Social Provider Response",response['accessToken']);
      this.login(response['accessToken']);
    } catch (e) {
      console.debug("Access Token not parsed ", { e });
    }
  }

  spotifySignIn() {
    const uri = this.spotifyAuth.token.getUri();
    window.location.href = uri;
    
  }


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
      return true
    }else{
      return false
    }
  }


}
