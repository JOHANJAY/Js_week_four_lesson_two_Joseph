class Dog {
    constructor(breed, color, size, tail) {
        this.breed = breed
        this.color = color
        this.size = size
        this.tail = tail
    }
    bark() {
       return `That ${this.color} ${this.breed} is barking at someone`
    }
    walk() {
       return `Take the ${this.size} dogs for a walk`
    }
    run() {
       return `The ${this.breed} running after a frisby`
    }
    wiggleTail() {
       return `That ${this.breed} is wiggling her ${this.tail} tail for a treat`
    }
    getAngry() {
       return `That ${this.breed}  is angry at something`
    }
}

const rottweiler = new Dog('rottweiler', 'black', 'large', 'short');
const beagle = new Dog("beagle", "brown", "large", "hairy");
const husky = new Dog("Husky", "gray and white", "large", "bushy");

function performAction(dog, action) {
  let output = document.getElementById("output");
  switch (action) {
    case "bark":
      output.textContent = dog.bark();
      break;
    case "run":
      output.textContent = dog.run();
      break;
    case "getAngry":
      output.textContent = dog.getAngry();
      break;
    case "wiggleTail":
      output.textContent = dog.wiggleTail();
      break;
    default:
      output.textContent = "";
  }
}

