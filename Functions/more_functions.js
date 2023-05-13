//displayMailingLabel()
"use strict";

function displayMailingLabel(name, address, city, state, zip) {
  console.log(name);
  console.log(address);
  console.log(city + ", " + state + " " + zip);
}

displayMailingLabel("Alexa Williams", "5673 Cherry Street", "Walker", "Ohio", 98569);

//addNumbers()

"use strict"; 
function addNumbers(num1, num2){
let result = num1 + num2; 
console.log(num1 + " + " + num2 + " = " + result);
}

addNumbers(5, 10); 
addNumbers(7, 15); 

//displayReceipt 
function displayReceipt(totalDue, amountPaid) {

  let changeDue = amountPaid - totalDue;

  
  if (amountPaid < totalDue) {
    let amountShort = totalDue - amountPaid;
    console.log("You still owe $" + amountShort.toFixed(2) + ".");
  } else {
    console.log("Total Due: $" + totalDue.toFixed(2));
    console.log("Amount Paid: $" + amountPaid.toFixed(2));
    console.log("Change Due: $" + changeDue.toFixed(2));
  }
}

displayReceipt(16.59, 18.00); 
displayReceipt(20.00, 4.30); 
displayReceipt(15.00, 15.00); 
