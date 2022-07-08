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
    return deck;
  }

  Length() {
    const { deck } = this;
    return deck.length;
  }

}

const deck = new DeckOfCards();
//deck.shuffle()
//deck.shuffle()
console.log(deck.deck)
console.log(deck.Length())

