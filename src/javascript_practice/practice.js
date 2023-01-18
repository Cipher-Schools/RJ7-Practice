//Declaration

class Triangle {
  #a;
  #b;
  #c;
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get parameter() {
    return this.calcParameter();
  }

  //Method
  calcParameter() {
    return this.a + this.b + this.c;
  }

  getSides() {
    return [this.a, this.b, this.c];
  }
}

const triangle = new Triangle(10, 20, 15);

// console.log(triangle.parameter);
// //spread
// console.log(...triangle.getSides());

class Animal {
  constructor(name) {
    this.name = name;
  }

  haveHorn() {
    console.log(`${this.name} has horns`);
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    super.speak();
    console.log("hikheh");
  }

  haveHorn() {
    super.haveHorn();
    console.log(`${super.name} has no horns`);
  }
}

const d = new Dog("abc");
d.haveHorn(); // abc has no horns

d.speak();
