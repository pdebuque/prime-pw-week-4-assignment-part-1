console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Test 2: should say "Hello Jo!": ${helloName('Jo')}`)

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(`Test 3: should say 15: ${addNumbers(10, 5)}`);


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}

console.log(`Test 4: should say 120: ${multiplyThree(3, 4, 10)}`);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[array.length - 1];
  }
}

const test1 = [];
const test2 = [4, 2, 19];
const test3 = ['rabbit', 'squirrel', 'bear', 'badger']

console.log(`Test 4: should say 'undefined, 19, 'badger'': ${getLast(test1)}, ${getLast(test2)}, ${getLast(test3)}`);

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  if (array.length === 0) {
    return false
  };
  let count = 0;
  for (let el of array) {
    if (el === value) {
      count++;
    }
  }
  if (count > 0) {
    return true
  } else {
    return false
  };
}


console.log(`Test 5: should say 'false, true, false': ${find(10, test1)}, ${find(19, test2)}, ${find('tiger', test3)}`)

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  const stringArray = string.split('')
  if (stringArray[0] === letter) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  array.forEach(element => sum += element)
  // TODO: loop to add items
  return sum;
}

console.log(`Test 6: should say 25: ${sumAll(test2)}`)

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function onlyPos(array) {
  const arrayPos = [];
  for (let el of array) {
    if (el > 0) {
      arrayPos.push(el);
    }
  }
  return arrayPos;
}

const test4 = [9, 0, 12, -4, 8, -28, 1];
console.log("Test 7: should say [9,12,8,1]:", onlyPos(test4));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Exactly Three (https://edabit.com/challenge/8vJaRDKxoGQ5JnCCz)

// Given a number n, determine whether n has exactly 3 divisors or not.

// Every number >1 has two divisors already: itself and one. The only numbers that can possibly have *only one* other divisor are perfect squares.
// First test will be whether or not it has an integer square root.

function isExactlyThree(number) {
  //Test 0: is number an integer number greater than 1?
  if (number < 2 || number%1 || isNaN(number)) {
    return false;
  }
  //Test 1: integer square root?
  const sqrt = Math.sqrt(number);
  if (Math.floor(sqrt) === sqrt) {
    //If the squareroot is prime, then the number has no further divisors
    //Test 2: is the square root prime?
    for (let i = 2; i <= Math.sqrt(sqrt); i++) { //for all possible divisors between 2 and the squareroot of sqrt,
      if (sqrt % i === 0) { //if sqrt is divisible by that number, it is not prime, so
        return false 
      } //otherwise,
      return true;
    }
  } else {
    return false;
  }
}

console.log(`test: should say true`, isExactlyThree('bear'))