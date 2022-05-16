import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from "@modules/tracks/services/track.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-tracks-pages',
  templateUrl: './tracks-pages.component.html',
  styleUrls: ['./tracks-pages.component.css']
})
export class TracksPagesComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = []

  constructor( private trackService: TrackService ) { }

  ngOnInit(): void {
    const observer$1 = this.trackService.dataTracksTrending$.subscribe(
      response => {
        this.tracksTrending = response;
        console.log('Canciones trending ---->', response);
      })

    const observer$2 = this.trackService.dataTracksRandom$.subscribe(
      response => {
        this.tracksRandom = [...this.tracksRandom, ...response]
        console.log('Canciones random ---->', response);
      })

    this.listObservers$ = [observer$1, observer$2]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }


}
