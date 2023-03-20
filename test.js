//let raceNumber = Math.floor(Math.random() * 1000);

//let registeredRunner = true;
//let runnerAge = 19;

//if (runnerAge < 45 && registeredRunner === true) {
// console.log(`Number ${(raceNumber += 1000)}`);
//} else {
// console.log(`Number ${raceNumber}`);
//}

//let registrationTime = "9:30";

//if (runnerAge > 18 && registeredRunner === true) {
// console.log(`They will race at ${registrationTime}`);
//} else if (runnerAge > 17 && registeredRunner === false) {
// console.log(`they will race at 11:00am
// `);
//} else if (runnerAge < 19 && registeredRunner === true) {
// console.log(`they will race at 12:30 pm `);
//} else {
// console.log("see the registration desk!");
//}
// console.log(!registeredRunner);

// === DEAFAULT FUNCTION ===//
// function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
//   console.log(`Remember to buy ${item1}`);
//   console.log(`Remember to buy ${item2}`);
//   console.log(`Remember to buy ${item3}`);
// }
// makeShoppingList();
// makeShoppingList("apple", "cake", "juice");

//===Helper function===//#1
//function myMultiply(num1, num2) {
//  return num1 * num2;
//}
//function myAddition(num1, num2) {
//  return myMultiply(num1, num2) + 60;
//}
//let productSum = myAddition(4, 5);

//console.log(productSum);

// ===Helper function===//#2
// function multiplyByNineFifths(number) {
//   return number * (9 / 5);
// }

// function getFahrenheit(celsius) {
//   return multiplyByNineFifths(celsius) + 32;
// }

// getFahrenheit(15);

// let plantNeedsWater = function (day) {
//   if (day === "Wednesday") {
// return true;
//   } else {
// return false;
//   }
// };

// console.log(plantNeedsWater("Tuesday"));

// let plantNeedsWater = (day) =>   day === 'Wednesday' ? true : false;
// let satellite = "The Moon";
// let galaxy = "The Milky Way";
// let stars = "North Star";

// function callMyNightSky() {
//   return `Night sky: ${"satellite"}, ${"The Milky Way"}, ${"North Star"} `;
// }

// console.log(callMyNightSky());

//let myArray = [6, 18, 20];
//let yourArray = [19, 81, 6];
//for (let i = 0; i < myArray.length; i++) {
// for (let j = 0; j < yourArray.length; j++) {
//   if (myArray[i] === yourArray[j]) {
//     console.log("Both arrays have the number: " + yourArray[j]);
//   }
// }
//}

//let i = 5;
// let asterisk = "*";

// while (i > 0) {
//   //console.log(asterisk);
//   //asterisk -= "*";
//   console.log(i);
//   i--;
// }

//let cards = ["diamond", "spade", "heart", "club"];

//let currentCard = "";
//while (currentCard != "spade") {
// currentCard = cards[Math.floor(Math.random() * 4)];
// console.log(currentCard);
//}
//let firstMessage = "I will print!";

//do {
// console.log(firstMessage);
//} while (true === false);

//let addTwo = (num) => {
//  return num + 2;
//};

//let checkConsistentOutput = (func, val) => {
//  let checkA = val + 2;
//  let checkB = func(val);
//  if (checkA === checkB) {
//    return func(val);
//  } else {
//    return "inconsistent results";
//  }
//};

//console.log(checkConsistentOutput(addTwo(2)));

//let groceryList = [
//  "orange juice",
//  "bananas",
//  "coffee beans",
//  "brown rice",
//  "pasta",
//  "coconut oil",
//  "plantains",
//];

//function myFruits() {
//  for (let i = 0; i < groceryList.length; i++) {
//    console.log(groceryList[i]);
//  }
//}

//myFruits();

//let fruits = ["mango", "papaya", "pineapple", "apple"];

//Iterate over fruits below
//let myFruits = (mango) => {
//  console.log(`I want to eat a ${mango}`);
//};
//fruits.forEach(myFruits);

//let bigNumbers = [100, 200, 300, 400, 500];

//Create the smallNumbers array below
//let smallNumbers = bigNumbers.map((number) => {
//  return number / 100;
//});
//console.log(smallNumbers);

//let randomNumbers = [375, 200, 3.14, 7, 13, 852];

//Call .filter() on randomNumbers below
//let smallNumbers = randomNumbers.filter((numbers) => {
//  return numbers < 250;
//});
//console.log(smallNumbers);
//let favoriteWords = [
//  "nostalgia",
//  "hyperbole",
//  "fervent",
//  "esoteric",
//  "serene",
//];

//let longFavoriteWords = favoriteWords.filter((characters) => {
//  return characters < 7;
//});
//console.log(longFavoriteWords);

//let animals = [
//  "hippo",
//  "tiger",
//  "lion",
//  "seal",
//  "cheetah",
//  "monkey",
//  "salamander",
//  "elephant",
//];

//let foundAnimal = animals.findIndex((animal) => {
//  return animal > 10;
//});
//console.log(foundAnimal);
//let newNumbers = [1, 3, 5, 7];
//let newSum = newNumbers.reduce((accumulator, currentValue) => {
//  console.log("The value of accumulator: ", accumulator);
//  console.log("The value of currentValue: ", currentValue);
//  return accumulator + currentValue;
//  console.log(newSum);
//}, 10);

//let myName = "moa kin";

//let otherName = myName.indexOf("l");
//console.log(otherName);

//let animals = [
//  "Hen",
//  "elephant",
//  "llama",
//  "leopard",
//  "ostrich",
//  "Whale",
//  "octopus",
//  "rabbit",
//  "lion",
//  "dog",
//];

//Create the secretMessage array below
//let secretMessage = animals.map((animal) => {
//  return animal[0];
//});

//let letterFilter = animals.filter((newCharacters) => {
//  return newCharacters.length < 6;
//});
//console.log(letterFilter);

//let words = ["chair", "music", "pillow", "brick", "pen", "door"];

//let shortWords = words.filter((word) => {
//  return word.length < 6;
//});
//console.log(shortWords);

//function factorialize(num) {
//  let product = 1;
//  for (let i = 2; i <= num; i++) {
//    product *= i;
//  }
//  return product;
//}

//factorialize(5);
//console.log(factorialize(5));
//let spaceship = {
//  "Fuel Type": "Turbo Fuel",
//  "Active Mission": true,
//  homePlanet: "Earth",
//  numCrew: 5,
//};

//let propName = "Active Mission";

//Write your code below
//let isActive = spaceship[propName];
//console.log(false);

//let retreatMessage =
//  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

//Write your code below
//let alienShip = {
//  retreat() {
//    console.log(retreatMessage);
//  },
//  takeOff() {
//    console.log("Spim... Borp... Glix... Blastoff!");
//  },
//};

//alienShip.retreat();
//alienShip.takeOff();

//let spaceship = {
//  passengers: null,
//  telescope: {
//    yearBuilt: 2018,
//    model: "91031-XLT",
//    focalLength: 2032,
//  },
//  crew: {
//    captain: {
//      name: "Sandra",
//      work: "Computer Engineering",
//      encourageTeam() {
//        console.log("We got this!");
//      },
//      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
//    },
//  },
//  engine: {
//    model: "Nimbus2000",
//  },
//  nanoelectronics: {
//    computer: {
//      terabytes: 100,
//      monitors: "HD",
//    },
//    "back-up": {
//      battery: "Lithium",
//      terabytes: 50,
//    },
//  },
//};

//let capFave = spaceship.crew.captain["favorite foods"][0];

//let newPassenger = spaceship.passengers[{ name: "super dog" }];
//console.log(newPassenger);

//let spaceship = {
//  crew: {
//    captain: {
//      name: "Lily",
//      work: "Computer Engineering",
//      cheerTeam() {
//        console.log("You got this!");
//      },
//    },
//    "chief officer": {
//      name: "Dan",
//      work: "Aerospace Engineering",
//      agree() {
//        console.log("I agree, captain!");
//      },
//    },
//    medic: {
//      name: "Clementine",
//      work: "Physics",
//      announce() {
//        console.log(`Jets on!`);
//      },
//    },
//    translator: {
//      name: "Shauna",
//      work: "Conservation Science",
//      powerFuel() {
//        console.log("The tank is full!");
//      },
//    },
//  },
//};

//Write your code below
//for (let crewMember in spaceship.crew) {
//  console.log(`${crewMember}: ${spaceship.crew[crewMember].name.work}`);
//}

//for (let crewMember in spaceship.crew) {
//  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].work} `
//  );
//}

//for (let crewMember in spaceship.crew) {
//  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].work}`)
//};
//let robot = {
//  _model: "1E78V2",
//  _energyLevel: 100,
//  _numOfSensors: 15,
//  set numOfSensors(num) {
//    if (typeof num === "number" && num >= 0) {
//      this._numOfSensors === "num";
//    }
//  },
//};

//--FUNCTION FACTORY--//
//let personFactory = (firstName, lastName, age, work) => {
//  return {
//    firstName,
//    lastName,
//    age,
//    work,
//  };
//};
//let workerOne = personFactory("James", "Will", 45, "dispatcher");
//let workerTwo = personFactory("George", "Russell", 26, "F1 Driver");
//let workerThree = personFactory("Lewis", "Hamilton", 40, "F1 Driver");
//console.log(workerOne);
//console.log(workerTwo);
//console.log(workerThree);

//--FUNCTION FACTORY-- #2//
//let personFactory = (firstName, lastName, age) => {
//  return {
//    firstName,
//    lastName,
//    age,
//  };
//};

//let alexander = personFactory("Alexander", "Hamilton", 40);
//let thomas = personFactory("Thomas", "Jefferson", 45);
//console.log(alexander);

//let robot = {
//  model: "1E78V2",
//  energyLevel: 100,
//  functionality: {
//    beep() {
//      console.log("Beep Boop");
//    },
//    fireLaser() {
//      console.log("Pew Pew");
//    },
//  },
//};

//let { functionality } = robot;
//console.log(functionality);

//let robot = {
//  model: "SAL-1000",
//  mobile: true,
//  sentient: false,
//  armor: "Steel-plated",
//  energyLevel: 75,
//};

//What is missing in the following method call?
//let robotKeys = Object.keys(robot);

//console.log(robotKeys);

//Declare robotEntries below this line:
//let robotEntries = Object.entries(robot);

//console.log(robotEntries);

//Declare newRobot below this line:

//let newRobot = Object.assign(
//  { laserBlaster: true, voiceRecognition: true },
//  robot
//);
//console.log(newRobot);

let myWord = "Rumbling";
let theScout = "Eren";
let marley = "Reiner";
let newResult = myWord.concat(" ", theScout, " ", marley);
console.log(newResult);

document.getElementById("result").innerHTML = newResult;

// let text1 = "Hello";
// let text2 = "world!";
// let result = text1.concat(" ", text2);

// document.getElementById("demo").innerHTML = result;
// console.log(result);

// let animals = [
//   "Hen",
//   "elephant",
//   "llama",
//   "leopard",
//   "ostrich",
//   "Whale",
//   "octopus",
//   "rabbit",
//   "lion",
//   "dog",
// ];
// let favorite = (Hen) => {
//   console.log(`My favorite Animal is ${Hen}`);
//   document.write(`<h3>My favorite Animal is ${Hen}</h3>`);
// };
// animals.forEach(favorite);
