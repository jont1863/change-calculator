// Write your JavaScript here

function calculateChange() {
    // Get the values of amount due and amount received
    const amountDue = parseFloat(document.getElementById('amount-due').value);
    const amountReceived = parseFloat(document.getElementById('amount-received').value);


    // Validate input
if (isNaN(amountDue) || isNaN(amountReceived)) {
    alert('Please enter valid numbers for Amount Due and Amount Received.');
    return;
    }

if (amountDue > amountReceived){
    alert("Please enter a higher Amount Received.");
}

    // Calculate change
    let changeDue = amountReceived - amountDue;
//Set up an input for switch case or If statement to get the change for the input of amount recieved.
    let dollars = Math.floor(changeDue);
    let quarters = Math.floor((changeDue % 1) / 0.25);
    let dimes = Math.floor(((changeDue % 1) % 0.25) / 0.1);
    let nickels = Math.floor((((changeDue % 1) % 0.25) % 0.1) / 0.05);
    let pennies = Math.round((((changeDue % 1) % 0.25) % 0.1) % 0.05 / 0.01);

   // Display denominations
   document.getElementById('dollars-output').innerText = `Dollars: ${dollars}`;
   document.getElementById('quarters-output').innerText = `Quarters: ${quarters}`;
   document.getElementById('dimes-output').innerText = `Dimes: ${dimes}`;
   document.getElementById('nickels-output').innerText = `Nickels: ${nickels}`;
   document.getElementById('pennies-output').innerText = `Pennies: ${pennies}`;
}
   //clickevent
   document.getElementById('calculate-change').addEventListener('click', calculateChange);