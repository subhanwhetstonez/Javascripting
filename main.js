//Makig a table
function fun(a) {
  for (let i = 0; i <= 10; i++) {
    console.log(a, "*", i, "=", a * i);
  }
}

fun(2);

//Triangle function
function notfun(c, d) {
  let star = "";
  for (let i = 0; i <= d; i++) {
    for (let k = c; k > i; k--) {
      star += "* ";
    }
    star += "\n";
  }
  console.log(star);
}

notfun(6, 5);

// Executing 2 functions in 1 function
function slop() {
  function fun(a) {
    for (let i = 0; i <= 10; i++) {
      console.log(a, "*", i, "=", a * i);
    }
  }

  fun(2);

  function notfun(c, d) {
    let star = "";
    for (let i = 0; i <= d; i++) {
      for (let k = c; k > i; k--) {
        star += "* ";
      }
      star += "\n";
    }
    console.log(star);
  }

  notfun(4, 5);
}

slop();

//Executing 2 functions in a new function
function funs(a) {
  for (let i = 0; i <= 10; i++) {
    console.log(a, "*", i, "=", a * i);
  }
}

function notfuns(c, d) {
  let star = "";
  for (let i = 0; i <= d; i++) {
    for (let k = c; k > i; k--) {
      star += "* ";
    }
    star += "\n";
  }
  console.log(star);
}

function slops() {
  funs(3);
  notfuns(8, 6);
}
slops();

//Executing a function in another function
function funz(g) {
  for (let i = 0; i <= 10; i++) {
    console.log(g, "*", i, "=", g * i);
  }
}

function notfunz(h, q) {
  let star = "";
  for (let i = 0; i <= q; i++) {
    for (let k = h; k > i; k--) {
      star += "* ";
    }
    star += "\n";
  }
  console.log(star);
  funz(5);
}

notfunz(4, 5);

//nested array
let nestarray = [
  [1, 2],
  [1, 3],
  [2, 3],
];

let singlearray = [];

for (i = 0; i < nestarray.length; i++) {
  for (j = 0; j < nestarray[i].length; j++) {
    singlearray.push(nestarray[i][j]);
  }
}

console.log(singlearray);

//Age level
function aging(a) {
  if (a >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are a Miner");
  }
}

aging(17);

// Do while loop
let i = 4;
do {
  console.log(i);
  i--;
} while (i >= 3);

//While & Do-while Loop
let cars = ["Lamborgini", "BMW", "Viper", "Hellcat"];
let garage = 0;
let text = "There is ";

console.log("In the garage");
while (cars[garage]) {
  console.log(text + cars[garage]);
  garage++;
}

let num = 0,
  sum = 0;

// loop as long as num is 0 or positive
while (num >= 0) {
  // add all positive numbers
  sum += num;

  // take input from the user
  num = parseInt(prompt("Enter a number: "));
}

// last, display sum
console.log(`The sum is ${sum}`);

let o = 4;
do {
  console.log(o);
  o--;
} while (o >= 3);

//Classes in Javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  Carinfo() {
    console.log(`Car Name: ${this.name}`);
    console.log(`Model Year: ${this.year}`);
  }
}

let Car1 = new Car("Nissan GTR", 2018);

Car1.Carinfo();
