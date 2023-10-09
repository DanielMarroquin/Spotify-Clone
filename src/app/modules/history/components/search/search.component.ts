import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() callBackData: EventEmitter<any> = new EventEmitter()

  src: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  callSearch(data: string): void {
    if (data.length >= 3 ) {
      this.callBackData.emit(data)
      console.log(data, 'music')
    }
  }



}
