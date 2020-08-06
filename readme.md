# 10 JavaScript Tricks:

## 1. Ternary Operator:

```javascript
const age = 80;

age > 50
  ? age > 70
    ? console.log("You are getting really Old man...")
    : console.log("Enjoy your life man..you are going to old..")
  : console.log("You are a Child...");
```

## 2. Convert a number to a string :

```javascript
const AGE = 21 + "";
console.log(typeof AGE);
```

## 3. Fill Arrays :

```javascript
const user = Array(5).fill(" ");
console.log(user);
```

## 4. Filter Unique values in Array :

```javascript
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
```

## 5. Dynamic Objects :

```javascript
const dynamic = "hobbies";

const details = {
  name: "Rupak",
  email: "rupakdey1998@gmail.com",
  [dynamic]: "sleeping",
};
console.log(details);
```

## 6. Slicing Arrays :

```javascript
const array_user = [11, 22, 33, 44, 55, 66, 77];
array_user.length = 5;

console.log(array_user);
```

## 7. Slicing Arrays at the End :

```javascript
const array_user = [11, 22, 33, 44, 55, 66, 77];
console.log(array_user.slice(-3));
```

## 8. Array to Object :

```javascript
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
```

## 9. Object to Arrays :

```javascript
const dynamic = "hobbies";
const details = {
  name: "Rupak",
  email: "rupakdey1998@gmail.com",
  [dynamic]: "sleeping",
};
const details_array_keys = Object.keys(details);
const details_array_values = Object.values(details);

console.log(details_array_keys);
console.log(details_array_values);
```

## OUTPUT:

```
1. You are getting really Old man...

2. string

3. [ ' ', ' ', ' ', ' ', ' ' ]

4. [ 'C', 'Java', 'React', 'Python', 'Javascript', 'C++', 'Ruby' ]

5. { name: 'Rupak', email: 'rupakdey1998@gmail.com', hobbies: 'sleeping' }

6. [ 11, 22, 33, 44, 55 ]

7. [ 33, 44, 55 ]

8. {
    '0': 'Youtube',
    '1': 'Facebook',
    '2': 'Whatsapp',
    '3': 'Instagram',
    '4': 'Twitter',
    '5': 'WeChat',
    '6': 'Snapchat'
   }

9. [ 'name', 'email', 'hobbies' ]
   [ 'Rupak', 'rupakdey1998@gmail.com', 'sleeping' ]
```

## 10. Check CODE Performance

```javascript
let startAt = performance.now();
for (let i = 0; i < 2020; i++) {
  console.log(i);
}
let endAt = performance.now();

console.log(`${endAt - startAt} miliseconds took to execute.`);
```

**NOTE** : Not try to run Performance code in code editor(gives error) ... run this in browser...
