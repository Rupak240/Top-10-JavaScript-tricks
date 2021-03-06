# TOP 10 JavaScript Tricks:

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

<br />
<br />

## Some more LIFE CHANGING JavaScript Tricks:

---

#### ONE :

```javascript
console.log('Hello')

console.error('Hello')

console.warn('Hello')

console.table({message: 'Hello')

console.log('%c my message', 'color: blue')
```

#### TWO :

```javascript
const favFood = "burger";
console.log({ favFood });
```

#### THREE :

```javascript
function getFullName({ firstName, lastName, middleName }) {
  return `${firstName} ${middleName} ${lastName}`;
}

console.log(
  getFullName({ firstName: "Mahendra", lastName: "DHONI", middleName: "Singh" })
);
```

#### FOUR :

```javascript
const arr = [11, 22, 33];
arr.splice(1, 1); // Deletes from the original array -- Risky

arr.slice(1, 1); // Makes a new copy of that array
const copyArr = [...arr]; // Makes a new copy of that array
console.log(copyArr);
```

#### FIVE :

```javascript
const obj = {
  a: 1,
  b: 2,
};
const copyObj = Object.assign({}, obj);
console.log(copyObj);
```

## Array Tricks:

### 1. Largest Element in an Array

```javascript
const arr = [100, 20, 47, 1000, 60, 900];

const maxEl = (arr) => {
  let el = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > el) {
      el = arr[i];
    }
  }

  return el;
};

console.log(maxEl(arr));
```

### 2. Smallest Element in an Array

```javascript
const arr = [100, 20, 47, 1000, 60, 900];

const minEl = (arr) => {
  let el = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < el) {
      el = arr[i];
    }
  }

  return el;
};

console.log(minEl(arr));
```

### 3. Second Largest Element in an Array

```javascript
const arr = [100, 20, 47, 1000, 60, 900];

const secondMaxEl = (arr) => {
  let max = 0;
  let secondMax = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};

console.log(secondMaxEl(arr));
```

### 4. Second Smallest Element in an Array

```javascript
const arr = [100, 20, 47, 1000, 60, 900];

const secondMinEl = (arr) => {
  let min = 999999;
  let secondMin = 999999;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      secondMin = min;
      min = arr[i];
    } else if (arr[i] < secondMin && arr[i] > min) {
      secondMin = arr[i];
    }
  }
  return secondMin;
};

console.log(secondMinEl(arr));
```

### 5. Remove Duplicate Elements in an Array

```javascript
const arr = [10, 34, 78, 769, 10, 56, 65, 34, 78];

const finalArr = (arr) => {
  arr = arr.sort();

  const [uniqueArr, duplicateArr] = [[], []];
  let prev = arr[0];
  uniqueArr[0] = prev;

  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];

    if (prev === value) {
      duplicateArr.push(value);
    }

    if (prev !== value) {
      uniqueArr[i] = value;
    }

    prev = value;
  }

  console.log(duplicateArr)

  return uniqueArr.filter((el) => el !== undefined);
};

console.log(finalArr(arr));
```

### 6. Sort an Array in descending order

```javascript
const arr = [100, 20, 47, 1000, 60, 900];

const sortArr = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sortArr(arr));
```

### 7. Sort an Array in ascending order

```javascript
const arr = [100, 20, 47, 1000, 60, 900];

const sortArr = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sortArr(arr));
```

### 8. Reverse an Array

```javascript
const arr = [100, 20, 47, 1000, 60, 900];

const reverseArr = (arr) => {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};

console.log(reverseArr(arr));
```

