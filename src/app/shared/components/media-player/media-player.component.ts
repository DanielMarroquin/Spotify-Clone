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
  // mockCover!: TrackModel;

  listObservables$: Array<Subscription> = [];

  constructor( 
    public multimediaService: MultimediaService
    ) {
   }

  ngOnInit(): void {
    // this.multimediaService.trackInfo$.subscribe(res => {
    //   console.log(res, 'Debo reproducir esta cancion')
    // })
    
  }

  ngOnDestroy(): void {
    this.listObservables$.forEach(u => u.unsubscribe())
    console.log('Desuscribeeeeee..!!!')
  }

}
