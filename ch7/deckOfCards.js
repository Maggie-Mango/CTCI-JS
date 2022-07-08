//OBJECT-ORIENTED DESIGN//


//7.1 Deck of Cards
class DeckOfCards {
  constructor() {
    this.deck = [];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

   suits.forEach((suit) => {
     values.forEach((value) => {
       this.deck.push(`${suit} of ${value}`)
     })
   })
  }

  Length() {
    const { deck } = this;
    return deck.length;
  }

  Shuffle() {
    let { deck } = this;
    let i, randomNum, storedCard;
    for (let i = 0; i < deck.length - 1; i++) {
      randomNum = Math.floor(Math.random() * (i + 1));
      storedCard = deck[i];
      //replace deck with random card
      deck[i] = deck[randomNum]
      //replace randomCard idx with storedCard
      deck[randomNum] = storedCard;
    }
  }
}

class BlackJack {
  constructor() {
    console.log("Dealer: Let's play BlackJack, place your bets in USD");
    this.score = 0;
    this.bet = 0;
    this.cards = new DeckOfCards();
    this.bet = 0;
  }

  getScore() {
    return this.score;
  }

  //step1: Place bet
  placeBet(num) {
    let { bet } = this;
    if (typeof num !== Number) {
      console.log("Dealer: I'm sorry, I didn't get that. Enter a number")
    }
    if (num <= 1000) {
      bet = num;
      console.log( `Dealer: Bets placed at $${bet}... Gotta start somewhere.`)
    } else if (num > 1000) {
      console.log( `Dealer: Bets placed at $${bet}. Big spender in the house!`)
    }
  }

  //step2: Deal Cards


  //card value


  //step3: Hit


  //Step4: Stand

}

const deck = new DeckOfCards();
console.log(deck.deck)
const game = new BlackJack();
game.placeBet(1000)

