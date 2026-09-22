// Truthy and Falsy Values

const values = [0, 1, -1, "", "hello", "0", null, undefined, NaN, [], {}];

for (const v of values) {
    if (v) {
        console.log(v, "is truthy");
    } else {
        console.log(v, "is falsy");
    }
}

// 0 is falsy (though it's falsy at first)
// 1 is truthy (truthy)
//     - 1 is truthy (falsy)
// "" is falsy (falsy)
// hello is truthy (truthy)
// 0 is truthy (thought it's falsy at first, but since it's a string, it's truthy)
// null is falsy (falsy)
// undefined is falsy (falsy)
// NaN is falsy (falsy)
// [] is truthy (wasn't sure)
// { } is truthy (wasn't sure)

// There are 6 falsy values in JavaScript: false, 0, "", null, undefined, and NaN. All other values are truthy.


// logical operators:

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

console.log("hello" && "world"); // thought it would return helloworld, but it returns world because && returns the last truthy value if all are truthy, or the first falsy value if any are falsy.
console.log("" || "fallback"); // fallback
console.log(null ?? "default"); // wasn't sure, but it returns default because ?? returns the right-hand side if the left-hand side is null or undefined.
console.log(0 || "default"); // default
console.log(0 ?? "default"); // thought it would return default,


//tenary operator '?': an if/else statement within a single line of code.
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);

// experimenting with more than 2 values
const waterTemp_celcius = 90;
const result =
    waterTemp_celcius < 100 ? "heating up" :
        waterTemp_celcius > 100 ? "panic: temp exceeded" :
            "water boiling"    
console.log(result)