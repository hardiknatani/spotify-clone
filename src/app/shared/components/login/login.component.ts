import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    window.location.href="https://accounts.spotify.com/authorize?response_type=code&client_id=8999086f97d2465887da133cf71f903a&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2F&state=qwertyqwertyqwer"
  }

}
