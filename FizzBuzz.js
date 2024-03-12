for (let number = 1; number <= 100; number++) {
    if ((number % 3 === 0) && (number % 5 === 0)) {// If divisible by 3 and 5, print "Fizz Buzz"
        console.log("Fizz Buzz");
    } else if (number % 3 === 0) {// If divisible by 3 "Fizz"
        console.log("Fizz");
    } else if (number % 5 === 0) {// If divisible by 5 "Buzz"
        console.log("Buzz");
    } else {
        console.log(number);
    }
}