let userPrompt = prompt("Enter a number (or type 'exit' to quit):");


// Sum Of n Natural Numbers

    if ( userPrompt === null || userPrompt.toLowerCase() === 'exit' ) {
        console.log("User chose to exit");
    }else if (isNaN(userPrompt)){
        console.log("Invalid input. Please enter a valid number.");
    }else{
        if(Number(userPrompt) < 0){
            console.log("Please enter a non-negative number.");
        }else{
            let sum = 0;
            for(let i = 1; i <= Number(userPrompt); i++){
                sum += i;
            }
            console.log("Sum of first " + userPrompt + " natural numbers is: " + sum);
        }
    }


// Factorial of a number    

    if ( userPrompt === null || userPrompt.toLowerCase() === 'exit' ) {
        console.log("User chose to exit");
    }else if (isNaN(userPrompt)){
        console.log("Invalid input. Please enter a valid number.");
    }else{
        if(Number(userPrompt) < 0){
            console.log("Please enter a non-negative number.");
        }else{
            let factorial = 1;
            for(let i = 1; i <= Number(userPrompt); i++){
                factorial *= i;
            }
            console.log("Factorial of " + userPrompt + " is: " + factorial);
        }
    }

// Factors of a number

if ( userPrompt === null || userPrompt.toLowerCase() === 'exit' ) {
    console.log("User chose to exit");
}else if (isNaN(userPrompt)){
    console.log("Invalid input. Please enter a valid number.");
}else{
    if(Number(userPrompt) < 0){
        console.log("Please enter a non-negative number.");
    }else{
        console.log("Factors of " + userPrompt + " are:");
        for(let i = 1; i <= Math.floor(Number(userPrompt)/2); i++){
            if(Number(userPrompt) % i === 0){
                console.log(i);
            }
        }
        console.log(Number(userPrompt)); // The number itself is also a factor
    }
}


// Check if a number is prime

function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num === 2) return true; // 2 is a prime number
    if (num % 2 === 0) return false; // Exclude even numbers
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        // Trick : Check divisibility from 3 to the square root of the number if the square root can't divide then it can't be divided by any number greater than its square root
        if (num % i === 0) return false;
    }
    return true;
}

if ( userPrompt === null || userPrompt.toLowerCase() === 'exit' ) {
    console.log("User chose to exit");
}else if (isNaN(userPrompt)){
    console.log("Invalid input. Please enter a valid number.");
}else{
    if(Number(userPrompt) < 0){
        console.log("Please enter a non-negative number.");
    }else{
        // The logic here is that if a number is not divisible by any number other than 1 and itself, it is prime.
        isPrime(Number(userPrompt)) ? console.log(userPrompt + " is a prime number.") : console.log(userPrompt + " is not a prime number.");
    }
}


// Sum of digits of a number
if ( userPrompt === null || userPrompt.toLowerCase() === 'exit' ) {
    console.log("User chose to exit");
}else if (isNaN(userPrompt)){
    console.log("Invalid input. Please enter a valid number.");
}else{
    if(Number(userPrompt) < 0){
        console.log("Please enter a non-negative number.");
    }else{
        let sumOfDigits = 0;
        let temp = Number(userPrompt);
        while (temp > 0) {
            sumOfDigits += temp % 10;
            temp = Math.floor(temp / 10);
        }
        console.log("Sum of digits of " + userPrompt + " is: " + sumOfDigits);
    }
}


// Reverse a number

if ( userPrompt === null || userPrompt.toLowerCase() === 'exit' ) {
    console.log("User chose to exit");
}else if (isNaN(userPrompt)){
    console.log("Invalid input. Please enter a valid number.");
}else{
    if(Number(userPrompt) < 0){
        console.log("Please enter a non-negative number.");
    }else{
        let reversedNumber = 0;
        let temp = Number(userPrompt);
        while (temp > 0) {
            reversedNumber = (reversedNumber * 10) + (temp % 10);
            temp = Math.floor(temp / 10);
        }
        console.log("Reversed number of " + userPrompt + " is: " + reversedNumber);
    }
}


// Check if the number is strong number

if ( userPrompt === null || userPrompt.toLowerCase() === 'exit' ) {
    console.log("User chose to exit");
}else if (isNaN(userPrompt)){
    console.log("Invalid input. Please enter a valid number.");
}else{
    if(Number(userPrompt) < 0){
        console.log("Please enter a non-negative number.");
    }else{
        let temp = Number(userPrompt);
        let sumOfFactorials = 0;
        while (temp > 0) {
            let digit = temp % 10;
            let fact = 1;
            for (let i = 1; i <= digit; i++) {
                fact *= i;
            }
            sumOfFactorials += fact;
            temp = Math.floor(temp / 10);
        }
        if(sumOfFactorials === Number(userPrompt)){
            console.log(userPrompt + " is a strong number.");
        }else{
            console.log(userPrompt + " is not a strong number.");
        }
    }
}