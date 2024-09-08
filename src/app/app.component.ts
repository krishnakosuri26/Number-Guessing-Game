import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Number Game';

  myNumber: number = 0;
  myNumberArray: number[] = [];
  inputNumber: number = 0;
  myMessage: string = "";
  guessCount: number = 0;
  maxGuesses: number = 10;

  ngOnInit(){
    this.startNewGame();
  }

  onClick(){
    if (this.guessCount >= this.maxGuesses) {
      this.myMessage = "Game over! You've used all your guesses.";
      return;
    }
    this.guessCount++;
    this.myNumberArray.push(this.inputNumber);

    if(this.inputNumber == this.myNumber){
      this.myMessage = "Your Guess is correct"
      
    }if(this.inputNumber > this.myNumber){
      this.myMessage = "Your guess is high"
      
    }if(this.inputNumber < this.myNumber){
      this.myMessage = "Your guess is low"
    }

    if (this.guessCount === this.maxGuesses) {
      this.myMessage += " You've used all your guesses. The number was " + this.myNumber;
    }

  }

  startNewGame() {
    this.myNumber = Math.floor(Math.random() * 100) + 1;
    this.myNumberArray = [];
    this.inputNumber = 0;
    this.myMessage = "";
    this.guessCount = 0;
  }
}
