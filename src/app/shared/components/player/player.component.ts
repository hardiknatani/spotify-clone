import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  isLoggedIn!:boolean;
  constructor(private authService:AuthService) { 
    this.authService.authSubject.subscribe(res=>{
      this.isLoggedIn=res
    })
  }

  ngOnInit(): void {

  }

}
