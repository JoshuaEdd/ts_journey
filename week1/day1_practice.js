// *DAY 1 PRACTICE: TYPES AND COERCION*

// PRACTICE (file: experiments.js)

console.log("5" + 3); // thought would throw an error, but it concatenates to "53"
console.log("5" - 3); // thought would throw an error, but it coerces to number and returns 2
console.log("5" * "2"); // thought would throw an error, but it coerces both to numbers and returns 10
console.log(5 + true); // no idea, but it coerces true to 1 and returns 6
console.log(5 + null); // no idea, but it coerces null to 0 and returns 5
console.log(5 + undefined); //no idea, but gave NaN because undefined cannot be coerced to a number
console.log("" + 0); // 0. 
console.log([] + []); // nothing
console.log([] + {}); // no idea. But it returns "[object Object]" because the empty array is coerced to an empty string, and the empty object is coerced to "[object Object]".

console.log(null == undefined); // true, because they are considered equal in non-strict comparison
console.log(null === undefined); // false, because they are different types
console.log(0 == ""); // true, because empty string is coerced to 0
console.log(0 === ""); // false, because they are different types
console.log(0 == false); // true, because false is coerced to 0
console.log("0" == false); // true, because both are coerced to 0
console.log(NaN == NaN); // false, because NaN is not equal to anything including itself

console.log(typeof 42); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known quirk in JavaScript)
console.log(typeof []); // object (arrays are objects in JavaScript)

console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false


const x = 5;
x = 10; // TypeError: Assignment to constant variable.

const person = { name: "Ada" };
person.name = "Grace";
console.log(person); // { name: "Grace" } - this works because we are modifying the contents of the object, not reassigning the variable.

// Understand why the first throws but the second works. const locks the binding, not the contents.


// Then template literals (the backtick is the key above Tab, not a quote):
const userName = "Joshua";
const age = 18;
console.log(`Name: ${userName}, age: ${age}`);
console.log(`Next year: ${age + 1}`);

// DELIVERABLE: at the bottom of the file, a comment block listing at least five results that surprised you, in your own words.

// Two concepts this teaches: the + operator joins text if either side is a string, but -, *, / always do maths. And computed decimals are approximate, which is why 0.1 + 0.2 is not exactly 0.3.