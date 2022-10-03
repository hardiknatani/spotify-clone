import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spotify-clone';

  constructor(private router:Router, private _activatedRoute: ActivatedRoute, private authService:AuthService){
 
  }
ngOnInit(){
  this._activatedRoute.queryParams.subscribe(parameter => {
  
  
    if( this.authService.isAuthenticated() ){
      this.authService.authSubject.next(this.authService.isAuthenticated())
      this.router.navigate(['/home'])
  }   else if(parameter.hasOwnProperty('code')   ){
      this.authService.login(parameter['code'])
      this.router.navigate(['/home'])
  }

    
      }) 
}

}
