import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../shared/services/api-service.service';
import { CardComponent } from '../shared/components/card/card.component';
import { Card } from '../shared/components/card/card.model';
import { elementAt } from 'rxjs';


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

   playlists:Card[]=[];

  ngOnInit(): void {
this.apiService.get('	https://api.spotify.com/v1/me/playlists?offset=5&limit=10').subscribe(res=>{
  console.log(res)
  res.items.map((ele:any)=>{
    this.playlists.push(new Card(ele.images[0]['url'],ele.name, ele.description))
  })

})
    
}
}