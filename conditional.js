// A family has spend 723 Unit of electricity in a month and their bill is calculated as follows:
// 1 - 100 Unit : 1$
// 101 - 200 Unit : 2$
// 201 - 300 Unit : 3$
// 301 - 400 Unit : 4$
// 401 - 500 Unit : 5$
// 501 - 600 Unit : 6$
// 601 - 700 Unit : 7$
// 701 - 800 Unit : 8$

function calculateBill (unit) {
    let bill = 0;
    if (unit >= 701 && unit <= 800) {
        bill += 8 * (unit - 700);
        unit = 700;
    }
    if (unit >= 601 && unit <= 700) {
        bill += 7 * (unit - 600);
        unit = 600;
    }
    if (unit >= 501 && unit <= 600) {
        bill += 6 * (unit - 500);
        unit = 500;
    }
    if (unit >= 401 && unit <= 500) {
        bill += 5 * (unit - 400);
        unit = 400;
    }
    if (unit >= 301 && unit <= 400) {
        bill += 4 * (unit - 300);
        unit = 300;
    }
    if (unit >= 201 && unit <= 300) {
        bill += 3 * (unit - 200);
        unit = 200;
    }
    if (unit >= 101 && unit <= 200) {
        bill += 2 * (unit - 100);
        unit = 100;
    }
    if (unit >= 1 && unit <= 100) {
        bill += 1 * unit;
        unit = 0;
    }
    return bill;
}

unit = 723;
let bill = calculateBill(unit);
console.log("Total bill is: " + bill + "$");


// A customer came to supermarket and bought 5 items after purchase he notices that there is an offer for discount on total bill. The discount is calculated as follows:

// 1. If total bill is greater than 500$, then discount is 10%
// 2. If total bill is greater than 300$, then discount is 5%
// 3. If total bill is less than or equal to 300$, then no discount

// Now after his purchase apply discount and calculate final bill


function calculateFinalBill (totalBill) {
    if(totalBill > 500) {
        totalBill -= totalBill * 0.1;
    } else if(totalBill > 300) {
        totalBill -= totalBill * 0.05;
    }
    return totalBill;
}


console.log("You need to pay total " + calculateFinalBill(bill) + "$");



// Lets say I want to withdraw 5293$ from bank and bank have notes of 100$, 50$, 20$, 10$, 5$, 1$

// So calculate how many notes of each bill will I get?


function calculateNotes(withdrawAmount) {
    const notes = {
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        1: 0
    };
  
    if(withdrawAmount >= 100) {
        notes[100] = Math.floor(withdrawAmount / 100);
        withdrawAmount %= 100;
    }
    if(withdrawAmount >= 50) {
        notes[50] = Math.floor(withdrawAmount / 50);
        withdrawAmount %= 50;
    }
    if(withdrawAmount >= 20) {
        notes[20] = Math.floor(withdrawAmount / 20);
        withdrawAmount %= 20;
    }
    if(withdrawAmount >= 10) {
        notes[10] = Math.floor(withdrawAmount / 10);
        withdrawAmount %= 10;
    }
    if(withdrawAmount >= 5) {
        notes[5] = Math.floor(withdrawAmount / 5);
        withdrawAmount %= 5;
    }
    if(withdrawAmount >= 1) {
        notes[1] = Math.floor(withdrawAmount / 1);
        withdrawAmount %= 1;
    }
    return notes;
}

console.log(calculateNotes(5293));