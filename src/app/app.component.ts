import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  oddNumbers:number[]=[];
  evenNumbers:number[]=[];
  onGameStarted(lastNumber:number){
    if(lastNumber%2==0){
      this.evenNumbers.push(lastNumber);
    }else{
      this.oddNumbers.push(lastNumber)
    }
  }
}
