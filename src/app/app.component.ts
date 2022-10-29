import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { pipe,map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spotify-clone';

  constructor(private router: Router, private authService: AuthService, private http: HttpClient) {

  }
  ngOnInit() {
          if (this.authService.isAuthenticated()) {
        this.authService.authSubject.next(this.authService.isAuthenticated())
      }
  
  }

}
