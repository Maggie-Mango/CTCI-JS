//OBJECT-ORIENTED DESIGN//


//7.1 Deck of Cards
Class DeckOfCards() {
  constructor() {
    this.deck = [];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length, i;

    while(m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]]
      return this;
    }
  }
}


//7.2 Call Center


//7.3 Jukebox


//7.4 Parking Lot


//7.5 Online Book Reader

//7.6 Jigsaw


//7.7 Chat Survey

//7.8 Othello

//7.9 Circular Array