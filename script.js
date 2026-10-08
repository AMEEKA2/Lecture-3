
// FOR LOOP
for (let i = 1; i <= 5; i++) {
  console.log("Vipthra Technologies");
}

// sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum =", sum);

// WHILE LOOP
let i = 1;
while (i <= 5) {
  console.log("i =", i);
  i++;
}

// DO-WHILE LOOP
let j = 20;
do {
  console.log("Vipthra Technologies");
  j++;
} while (j <= 10);

// FOR-OF LOOP
let str = "Vipthra Technologies";
for (let val of str) {
  console.log("val =", val);
}

// FOR-IN LOOP
let student = {
  name: "Ameeka Bhat",
  age: 20,
  cgpa: 7.5,
  isPass: true,
};

for (let key in student) {
  console.log(key, "=", student[key]);
}

// Qs1. Print all even numbers from 0 to 100
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// Qs2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;
let userNum = prompt("Guess the game number :");

while (userNum!= gameNum) {
  userNum = prompt("You entered wrong number. Guess again :");
}
console.log("congratulations, you entered the right number");

// STRINGS
let str1 = "ApnaCollege";
let str2 = 'ApnaCollege';
console.log(str1);
console.log(str2);

// Template Literals
let specialString = `This is a template literal`;
console.log(specialString);

let obj = {
  item: "pen",
  price: 10,
};
console.log(`The cost of ${obj.item} is ${obj.price} rupees`);

// String Methods
let str3 = "Vipthra\Technologies"; // 12 characters
console.log(str3.length);

let str4 = "Vipthra Technologies";
let newStr = str4.toUpperCase();
console.log(newStr);

let str5 = "VIPTHRATECHNOLOGIES";
console.log(str5.toLowerCase());

let str6 = " Vipthra Technologies JS ";
console.log(str6.trim());

let str7 = "Vipthra Technologies";
console.log(str7.slice(1, 3));
console.log(str7.slice(4));

let str8 = "Vipthra";
let str9 ="Technologies";
let res = str8.concat(str9);
console.log(res);
console.log(str8 + str9);

let str10 = "Hello";
console.log(str10.replace("H", "y"));
console.log(str10.replaceAll("l", "y"));

console.log(str10.charAt(0));

