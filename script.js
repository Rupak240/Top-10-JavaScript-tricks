// import { cloneDeep } from "lodash";

/*
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
*/
// 1.
console.log("Hello");
console.error("Hello");
console.warn("Hello");
console.table({ message: "Hello" });
console.log("%c my message", "color: blue");

// 2.
const favFood = "burger";
console.log({ favFood });

// 3.
function getFullName({ firstName, lastName, middleName }) {
  return `${firstName} ${middleName} ${lastName}`;
}

console.log(
  getFullName({ firstName: "Mahendra", lastName: "DHONI", middleName: "Singh" })
);

// 4.
const arr = [11, 22, 33];
arr.splice(1, 1); //Deletes from the original array -- Risky

arr.slice(1, 1); // Makes a new copy of that array
const copyArr = [...arr]; // Makes a new copy of that array
console.log(copyArr);

// 5.
const obj = {
  a: 1,
  b: 2,
};
const copyObj = Object.assign({}, obj);
console.log(copyObj);

// 6.
// const user = {
//   id: 1998,
//   details: {
//     fullName: "Rupak Dey",
//     age: 21,
//   },
// };

// const userCopy = cloneDeep(user);
// console.log(userCopy);

// Second Largest Element in a Array
// const arr = [100, 20, 47, 1000, 60, 900];

// const secondMaxEl = (arr) => {
//   let max = 0;
//   let secondMax = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       secondMax = max;
//       max = arr[i];
//     } else if (arr[i] > secondMax && arr[i] < max) {
//       secondMax = arr[i];
//     }
//   }
//   return secondMax;
// };

// console.log(secondMaxEl(arr));

// Second Minimum Element in a Array
// const arr = [100, 20, 47, 1000, 60, 900];

// const secondMinEl = (arr) => {
//   let min = 999999;
//   let secondMin = 999999;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       secondMin = min;
//       min = arr[i];
//     } else if (arr[i] < secondMin && arr[i] > min) {
//       secondMin = arr[i];
//     }
//   }
//   return secondMin;
// };

// console.log(secondMinEl(arr));