import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TrackModel } from '../../core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {


  // Declaramos un evento personalizado para dispararlo recibiendo como argumento
  callBack: EventEmitter<any> = new EventEmitter<any>()

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio!: HTMLAudioElement

  constructor() {
    this.audio = new Audio;
    this.trackInfo$.subscribe(res => {
      if (res) {
        console.log(res, 'Aqui va la info de la cancion')
        this.setAudio(res)
      }

      
    })

  }

  public setAudio(track: TrackModel): void {
    console.log(track.url, 'La fuente de la data')
    this.audio.src = track.url
  }


}
