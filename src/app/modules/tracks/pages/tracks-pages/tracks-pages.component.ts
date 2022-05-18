import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from "@modules/tracks/services/track.service";

@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  constructor( private trackService: TrackService ) { }

  ngOnInit(): void {
    this.trackService.getAllTracks$()
    .subscribe((response: TrackModel[]) => {
      this.tracksTrending = response
    })

    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
    })
  }

  ngOnDestroy(): void {

  }


}
