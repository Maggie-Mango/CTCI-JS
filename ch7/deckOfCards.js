//OBJECT-ORIENTED DESIGN//


//7.1 Deck of Cards
class DeckOfCards {
  constructor() {
    this.deck = [];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

   suits.forEach((suit) => {
     values.forEach((value) => {
       this.deck.push([suit, value])
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
    this.dealerScore = 0;
    this.cards = new DeckOfCards();
    this.bet = 0;
    this.hand = [];
    this.firstCard = [];
    this.cards.Shuffle();
    this.cards.Shuffle();
    this.cards.Shuffle();
  }

  reset() {
    this.score = 0;
    this.bet = 0;
    this.cards = new DeckOfCards();
    this.bet = 0;
    this.hand = [];
    this.firstCard = [];
    this.dealerScore = 0;
    this.cards.Shuffle();
    this.cards.Shuffle();
    this.cards.Shuffle();
  }

  current() {
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
    console.log(`your current score is ${this.score}`);
    console.log(`your current hand is :`, this.hand);
    console.log(`*Dealer Stares* "So what will it be?"`)
    console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`)
    console.log('your bet: ', this.bet)
  }

  addScore(num, card) {
    this.score += num;
    if (this.score > 21) {
      this.youLose(card);
    }
  }

  addDealerScore(num, card) {
    this.dealerScore += num;
    if (this.firstCard.length === 0) {
      this.firstCard.push(card);
      this.showFirstCard(card);
    }
  }

  showFirstCard(card) {
    console.log('The dealer flashes you her first card: ', this.firstCard)
  }


  //step1: Place bet
  placeBet(num) {
    let { bet } = this;

    if (typeof num !== "number") {
      console.log("Dealer: I'm sorry, I didn't get that. Enter a number")
    }
    if (num <= 1000) {
      this.bet += num;
      console.log( `Dealer: Bets placed at $${bet}... Gotta start somewhere.`)
      this.deal('player');
    } else if (num > 1000) {
      this.bet += num;
      console.log( `Dealer: Bets placed at $${bet}. Big spender in the house!`)
      this.deal('player');
    }
    this.deal('dealer');
  }

  //step2: Deal Cards
  deal(player) {
    if (player !== 'dealer') console.log("Dealer: *Deals 2 cards*")

    let { cards } = this;
    for (let i = 2; i > 0; i--) {
      let temp = cards.deck.pop();
      this.hand.push(temp);
      if (temp[1] === 'King' || temp[1] === 'Queen' || temp[1] === 'Jack') {
        if (player !== 'dealer') {
          this.addScore(10)
        } else {
          this.addDealerScore(10, temp);
        }

      } else if (temp[1] === 'Ace') {
        if ( (this.score + 11) > 21 ) {
          if (player !== 'dealer') {
            this.addScore(1);
          } else {
            this.addDealerScore(1, temp);
          }

        } else {
          if (player !== 'dealer') {
            this.addScore(11);
          } else {
            this.addDealerScore(11, temp);
          }
        }
      } else {
        if (player !== 'dealer') {
          this.addScore(temp[1]);
        } else {
          this.addDealerScore(temp[1], temp);
        }
      }
    }
    if (player !== 'dealer') this.current();
  }

  //step3: Hit
  hit() {
    console.log('HIT ME!!!')
    let { cards } = this;
    const temp = cards.deck.pop();
    if (temp[1] === 'King' || temp[1] === 'Queen' || temp[1] === 'Jack') {
        this.addScore(10, temp)
      } else if (temp[1] === 'Ace') {
        if ( (this.score + 11) > 21 ) {
          this.addScore(1, temp);
        } else {
          this.addScore(11, temp);
        }
      } else {
        this.addScore(temp[1], temp)
      }
  }


  //Step4: Stand


  youLose(card) {
    console.log(`You drew a ${card[1]} of ${card[0]} making your score ${this.score}`)
    console.log(`Dealer: Tough luck today. You lose $${this.bet}`);
  }

}

const deck = new DeckOfCards();
const game = new BlackJack();
game.placeBet(1000);
game.hit();
