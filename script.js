// Ternary Operator
const age = 80;

age > 50
  ? age > 70
    ? console.log("You are getting really Old man...")
    : console.log("Enjoy your life man..you are going to old..")
  : console.log("You are a Child...");

// Convert a number to a string
const AGE = 21 + "";
console.log(typeof AGE);

// Fill Arrays
const user = Array(5).fill(" ");
console.log(user);

// Unique values in Array
const languages = [
  "C",
  "Java",
  "React",
  "Python",
  "Javascript",
  "C++",
  "Java",
  "C",
  "Ruby",
];

const unique = Array.from(new Set(languages));
console.log(unique);

// Dynamic Objects
const dynamic = "hobbies";

const details = {
  name: "Rupak",
  email: "rupakdey1998@gmail.com",
  [dynamic]: "sleeping",
};
console.log(details);

// Slicing Arrays
const array_user = [11, 22, 33, 44, 55, 66, 77];
array_user.length = 5;

console.log(array_user);

// Slicing Arrays END
console.log(array_user.slice(-3));

// Array to Object
const tech = [
  "Youtube",
  "Facebook",
  "Whatsapp",
  "Instagram",
  "Twitter",
  "WeChat",
  "Snapchat",
];

const tech_object = { ...tech };
console.log(tech_object);

// Object to Arrays
const details_array_keys = Object.keys(details);
const details_array_values = Object.values(details);

console.log(details_array_keys);
console.log(details_array_values);

// CHECK PERFORMANCE
let startAt = performance.now();

for (let i = 0; i < 2020; i++) {
  console.log(i);
}

let endAt = performance.now();

console.log(`${endAt - startAt} miliseconds took to execute.`);
