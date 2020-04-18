import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted=new EventEmitter<{increment:number}>();
  count=0;
  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    this.count++;
    this.gameStarted.emit({increment:this.count})
  }



}