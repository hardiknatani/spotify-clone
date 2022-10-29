import { Component, OnInit,Injector } from '@angular/core';
import { AppComponentBase } from '../AppComponentBase';
import { AppConsts } from '../../appConstants';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AppComponentBase implements OnInit {

isAuthenticated!:boolean


  constructor(injector: Injector,public authService:AuthService) {
    super(injector)
    this.authService.authSubject.subscribe(res=>{
    this.isAuthenticated=res
    })
   }

  ngOnInit(): void {
    this.authService.authSubject.subscribe(res=>{
    this.isAuthenticated=res
    })
  }

  login(){
    this.authService.spotifySignIn()
  }

  logout(){
    this.authService.logout();
    this.authService.authSubject.subscribe(res=>{
      this.isAuthenticated=res
      })
  }



}
