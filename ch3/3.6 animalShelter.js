const LinkedList = require("../util/Queue");

//Animal Shelter
//Restrictions: First in First out basis. People can specify if they want a dog or cat otherwise they'll just get the animal with oldest arrival time
class Animal {
  constructor(type) {
    this.type = type;
  }
}


class AnimalShelter {
  constructor() {
    this.shelter = new LinkedList();
  }

  enqueue(animal) {
    this.shelter.append(animal);
    console.log(animal.name, 'was dropped off at the shelter')
  }

  dequeueAny() {
    let idx = this.shelter.getSize() - 1;
    return this.shelter.removeFrom(idx);
  }

  dequeueDog() {
    let idx = 0;
    let curr = this.shelter.head
    while (curr !== null) {
      if (curr.val.type === 'dog') {
        return this.shelter.removeFrom(idx);
      } else {
        curr = curr.next;
      }
      idx++;
    }
    //else
    console.log('there are no more dogs left in the shelter :(')
  }

  dequeueCat() {
    let idx = 0;
    let curr = this.shelter.head
    while (curr !== null) {
      if (curr.val.type === 'cat') {
        return this.shelter.removeFrom(idx);
      } else {
        curr = curr.next;
      }
      idx++;
    }
    //else
    console.log('there are no more cats left in the shelter :(')
  }

}


const shelly = new Animal('dog', 'Shelly')
const astro = new Animal('cat', 'Astro')
const jack = new Animal('cat', 'Jack');
const chema = new Animal('dog', 'Chema');
const dog4 = new Animal('dog', 'Jax')
const brooklyn = new AnimalShelter();

console.log(brooklyn.enqueue(jack))
console.log(brooklyn.enqueue(astro))
console.log(brooklyn.enqueue(shelly))
console.log(brooklyn.enqueue(chema))
console.log(brooklyn.enqueue(jack))
console.log(brooklyn.enqueue(dog4))
console.log(brooklyn.dequeueDog())
console.log(brooklyn.dequeueDog())
//console.log(brooklyn.dequeueAny())