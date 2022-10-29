import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public parameterValue!: string;
  constructor(
    private apiService:ApiService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
this.apiService.get('	https://api.spotify.com/v1/users/me/playlists?offset=5&limit=10').subscribe(res=>{
  console.log(res)
})
    
}
}