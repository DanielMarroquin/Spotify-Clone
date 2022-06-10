import { Component, OnInit } from '@angular/core';
import { SearchService } from "@modules/history/services/search.service";

@Component({
  selector: 'app-history-pages',
  templateUrl: './history-pages.component.html',
  styleUrls: ['./history-pages.component.css']
})
export class HistoryPagesComponent implements OnInit {

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
  }

  getDataSearch(event: string): void {
    //TODO: Se captura la informacion del campo y se comparte
    console.log('==> Entrando al componente padre', event)
    this.searchService.searchTracks$(event).subscribe( res => {
      console.log('.....', res);
    })
  }

}
