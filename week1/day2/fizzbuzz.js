// Print the numbers 1 to 100, with these substitutions:

// divisible by 3, print "Fizz"
// divisible by 5, print "Buzz"
// divisible by both 3 and 5, print "FizzBuzz"
// otherwise print the number

// You need the modulo operator, %, which gives the remainder of a division. 9 % 3 is 0, so 9 is divisible by 3. 10 % 3 is 1.
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//         continue;
//     }

//     if (i % 3 == 0) {
//         console.log("Fizz");
//         continue
//     }
    
//     if (i % 5 == 0) {
//         console.log("Buzz");
//         continue;
//     }
//     console.log(i)
// }

for (let j = 1; j <= 100; j++) {
    let nums = "";    
    if (j % 3 == 0) {
        nums += "Fizz";
    }
    
    if (j % 5 == 0) {
        nums += "Buzz";
    }

    if (nums === "") {
        nums = j;
    }
    console.log(nums)
}