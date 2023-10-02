// JavaScript loop here started
const tryLoop = ["A", "B", "C", "D", "E"];
for (i = 0; i < tryLoop.length; i++) {
  console.log(i);
}

// javaScript in loop
const person = { fname: "John", lname: "Doe", age: 30, job: "Front end developer" };
for (x in person) {
  console.log(person[x]);
}
const numbers = [50, 14, 5, 8, 63, 74, 5];
for (number in numbers) {
  console.log(numbers[number]);
}

// javaScript for of loop

let a = "Bangladesh";
for (i of a) {
  console.log(i);
}

// javascript whille
let m = 0;
let text = "";
while (m < 10) {
  text += "the number is " + m;
  m++;
}
console.log(text);
