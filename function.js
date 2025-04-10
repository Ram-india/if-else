// billing

let totalprice = 1000;
let amountrecived = 99;

//console.log("total price", totalprice);

function billing(){
    if(totalprice > amountrecived){
        let num = totalprice - amountrecived;
        return(`You Need to pay Rs${num}, Please pay amount`);

    }else if(totalprice < amountrecived){
        let num = totalprice - amountrecived;
        return(`We Need to pay Rs${num}, Please get Your amount`);
    }else{
        
        return(`Sucessfully paid, Thank You..`);
    }
}
//console.log(billing());

// EMI
//Loan amount
let principal = 100000; 
//tenure months
//let tenure = 12;
//interest rate
let interest = 10;


// function emi(){
//     let value =  (principal * interest *(1+interest)^tenure)/((1+interest)^tenure-1);
//     return value;
// }
//console.log(emi());

function calculateEMI(principal, annualRate, tenureMonths) {
    const monthlyRate = annualRate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return emi.toFixed(2); // returns EMI rounded to 2 decimal places
  }
  
  // Example usage:
  const loanAmount = 500000; // ₹5,00,000
  const interestRate = 10;   // 10% annual
  const tenure = 60;         // 60 months = 5 years
  
  const emi = calculateEMI(loanAmount, interestRate, tenure);
  console.log(`Monthly EMI: ₹${emi}`);
  console.log(`Total Interest Payable: ₹${(emi * tenure - loanAmount).toFixed(2)}`);
  console.log(`Total Payment: ₹${(emi * tenure).toFixed(2)}`);

