const LinkedList = require("../util/Queue");

//Animal Shelter
//Restrictions: First in First out basis. People can specify if they want a dog or cat otherwise they'll just get the animal with oldest arrival time
class Animal {
  constructor(type) {
    this.type = type;
  }
}


class AnimalShelter() {
  constructor() {
    this.cats = new LinkedList();
    this.dogs = new LinkedList();
  }

  enqueue(animal) {

  }

  dequeueAny() {

  }

  dequeueDog() {

  }

  dequeueCat() {

  }

}