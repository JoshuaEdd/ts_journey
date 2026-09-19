// currency converter
const exchRate = 1332;

function nairaToUsd(amount) {
    let result = amount / exchRate;
    return result.toFixed(2);
}

function usdToNaira(amount) {
    let result = amount * exchRate;
    return result;
}

// temperature converter
function celsiusToFahrenheit(celsius) {
    let result = (celsius * 9) / 5 + 32;
    return result;
}

//weight converter
function kgToPounds(kg) {
    let result = kg * 2.20462;
    return result;
}


console.log(`5000 naira is equivalent to ${nairaToUsd(5000)} USD`);
console.log(`${nairaToUsd(5000)} USD is equivalent to ${usdToNaira(nairaToUsd(5000))} naira`);
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(100));
console.log(kgToPounds(7).toFixed(2));