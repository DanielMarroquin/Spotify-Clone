import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from "@modules/history/services/search.service";
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-pages',
  templateUrl: './history-pages.component.html',
  styleUrls: ['./history-pages.component.css']
})
export class HistoryPagesComponent implements OnInit {

  listResults$: Observable<any> = of([])

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  getDataSearch(event: string): void {
    //TODO: Se captura la informacion del campo y se comparte
    console.log('==> Entrando al componente padre', event)

    // this.listResults$ Al ser un observable ya se suscribe 
    this.listResults$ = this.searchService.searchTracks$(event)
  }

}
