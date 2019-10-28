// Find prime factors of a given number N

// Array to store prime factors of a given number
var primeFactors = [];
var factor = 3;

function findPrimeFactors(inputNumber){
    // Check and add to array, if number is divisible by smallest prime number 2
    while(inputNumber%2 === 0){
        inputNumber /= 2;
        primeFactors.push(2);
    }
    // Check and add it to array, if divisible by next prime number
    while(factor*factor <= inputNumber){
        if(inputNumber % factor === 0){
            inputNumber /= factor;
            primeFactors.push(factor);
        }
        // if not by 3, check with next prime factor
        else{
            factor += 2;
        }
    }
    // After dividing with all possible prime factors, add remaining number to array 
    if(inputNumber > 1)
    primeFactors.push(inputNumber);

    // Finally return array conataining all prime factors of given number
    return primeFactors;
}

console.log('Prime factors of given number are:');
console.log(findPrimeFactors(999));