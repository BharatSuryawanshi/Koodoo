const {
    accountBalanceHistory
} = require('./constants')

const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/

    // Write your logic here  - No pressure 😁 //

    let previousMonthAmount = [];
    let amountDifference = null;
    let isTypeA = false;
    let counter = 1
    for (let i = accountBalanceHistory.length - 1; i >= 0; i--) {
        const amount = accountBalanceHistory[i].account.balance.amount;

        if (previousMonthAmount.length) {
            
            const difference = previousMonthAmount[0] - amount;

            if(difference <= 0) {
                previousMonthAmount[0] = amount
                continue
            }

            if (counter) {
                amountDifference = difference;
                counter = 0;

            } else {
                if (difference !== amountDifference) {
                    isTypeA = true
                }
            }
            previousMonthAmount[0] = amount
        } else {
            previousMonthAmount.push(amount)
            amountDifference = 0;
        }
    }

    return isTypeA ? "A" : "B"
};

const accountType = accountTypeChecker(accountBalanceHistory);

console.log('accountType ===>', accountType)

module.exports = {
    accountTypeChecker
};