let creditLimit = 60;

// DETERMINING LOAN...
const loanOut = amount => {
  
  return new Promise((resolve, reject) => {

    if (creditLimit >= amount){
      creditLimit -= amount;
      resolve(amount);

    } else if (creditLimit > 0) {
      resolve(creditLimit)
      creditLimit = 0;

    } else {
      reject('Insufficient Funds!');
    }

  })

}

// ASKING FOR MONEY...
console.log("Asking for $150, which should be okay ...");
loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });