// // class Animal {
// //   constructor() {}
// //   eat() {
// //     console.log("nom nom nom");
// //   }
// // }

// // function Dog() {}

// // // Only change code below this line

// // Dog.prototype = Object.create(Animal.prototype);
// // Dog.prototype.constructor = Dog;

// // Dog.prototype.bark = function () {
// //   console.log("Woof!");
// // };

// // // Only change code above this line

// // let beagle = new Dog();
// // beagle.eat();
// // beagle.bark();

// let glideMixin = function (obj) {
//   obj.glide = function () {
//     console.log("zoooooom!!");
//   };
// };

// let bird = {
//   name: "Donald",
//   numLegs: 2,
// };

// let boat = {
//   name: "Warrior",
//   type: "race-boat",
// };

// glideMixin(bird);
// glideMixin(boat);

// // bird.glide();
// // boat.glide();

// console.log(bird.glide());
// console.log(boat.glide());

// let userName = "";
// userName === "jane" ? console.log(`Hello, ${userName}`) : console.log("Hello");

// const userQuestion = "When i will be poweruful";
// console.log(`The user asked ${userQuestion}`);

// let randomNumber = Math.floor(Math.random() * 8);

// const eightBall = "";
// switch (randomNumber) {
//   case 1:
//     randomNumber === 0;
//     console.log("It is certain");
//     break;
//   case 2:
//     randomNumber === 1;
//     console.log("It is decidedly so");
//     break;
//   case 3:
//     randomNumber === 2;
//     console.log("Reply hazy try again");
//     break;
//   case 4:
//     randomNumber === 3;
//     console.log("Cannot predict now");
//     break;
//   case 5:
//     randomNumber === 4;
//     console.log("Do not count on it");
//     break;
//   case 6:
//     randomNumber === 5;
//     console.log("My sources say no");
//     break;
//   case 7:
//     randomNumber === 6;
//     console.log("Outlook not so good");
//     break;
//   case 8:
//     randomNumber === 7;
//     console.log("Signs point to yes");
//     break;
//   default:
//     console.log("No signs");
// }
// console.log(eightBall);

let i = 0;
let asterisk = "*";

while (i < 5) {
  console.log(asterisk);
  asterisk += "*";

  i++;
}
