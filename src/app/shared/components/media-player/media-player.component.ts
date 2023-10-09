import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from "@shared/services/multimedia.service";
import { Subscription } from "rxjs"; //TODO: LIBRERIA DE PROGRAMACION REACTIVA

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',
    album: 'One Love',
    name: 'Getting Over',
    url: 'http://localhost:3001/track.mp3',
    _id: 1
  }

  listObservables$: Array<Subscription> = [];

  constructor( private multimediaService: MultimediaService) {
   }

  ngOnInit(): void {
    const observer$1: Subscription = this.multimediaService.callBack.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion', response)
      }
    )
    console.log(observer$1.add, 'cancion')
    this.listObservables$ = [observer$1]
    
  }

  ngOnDestroy(): void {
    this.listObservables$.forEach(u => u.unsubscribe())
    console.log('Desuscribeeeeee..!!!')
  }

}
