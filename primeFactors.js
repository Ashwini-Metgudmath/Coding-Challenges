// Find prime factors of a given number N

var primeFactors = [];
var factor = 3;

function findPrimeFactors(inputNumber){
    while(inputNumber%2 === 0){
        inputNumber /= 2;
        primeFactors.push(2);
    }
    while(factor*factor <= inputNumber){
        if(inputNumber % factor === 0){
            inputNumber /= factor;
            primeFactors.push(factor);
        }
        else{
            factor += 2;
        }
    }
    if(inputNumber > 1)
    primeFactors.push(inputNumber);

    return primeFactors;
}

console.log('Prime factors of given number are:');
console.log(findPrimeFactors(999));