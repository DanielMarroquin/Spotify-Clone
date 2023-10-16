import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from "@shared/services/multimedia.service";

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';
  //Inicializo los datos que voy a traer de Track Model
  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    url: '',
    cover: ''
  };

  constructor( private multimediaService: MultimediaService ) { }

  ngOnInit(): void {
  }

  //Método para disparar el evento "Reproducir Musica"
  sendPlay(track: TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
  }

}
