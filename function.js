// billing

let totalprice = 1000;
let amountrecived = 99;

//console.log("total price", totalprice);

function billing() {
  if (totalprice > amountrecived) {
    let num = totalprice - amountrecived;
    return `You Need to pay Rs${num}, Please pay amount`;
  } else if (totalprice < amountrecived) {
    let num = totalprice - amountrecived;
    return `We Need to pay Rs${num}, Please get Your amount`;
  } else {
    return `Sucessfully paid, Thank You..`;
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
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return emi.toFixed(2); // returns EMI rounded to 2 decimal places
}

// Example usage:
const loanAmount = 500000; // ₹5,00,000
const interestRate = 10; // 10% annual
const tenure = 60; // 60 months = 5 years

const emi = calculateEMI(loanAmount, interestRate, tenure);
//console.log(`Monthly EMI: ₹${emi}`);
//console.log(`Total Interest Payable: ₹${(emi * tenure - loanAmount).toFixed(2)}`);
//console.log(`Total Payment: ₹${(emi * tenure).toFixed(2)}`);

//===== Detergent  process ======

let soda = 20;
let slurry = 2;
let freeflowSalt = 10;
let TSP = 2;
let globalsalt = 2;
let aos = 0.4;
let sls = 0.5;
let sttp = 0.25;
let granuals = 2;

//=====process 1=====//

function process1(status) {
  let level_1 = "true";
  if (level_1 == status) {
    const mix = soda + slurry;
    return `process 1 completed proceed next ..`;
  } else {
    return `prepare the required chemicals`;
  }
}
//==========process 2=====//

function process2(status) {
  let level_2 = "true";
  if (level_2 == status) {
    const mix2 = freeflowSalt + TSP + globalsalt;
    return `process 2 completed proceed next ..`;
  } else {
    return `please mix 15 mins and let cool down ...`;
  }
}

//===========primary mix ============//

function primarymix(tempStatus, ph) {
  let phlevel = 7;
  let cooldown = "cool";
  if (phlevel <= ph && cooldown == tempStatus) {
    const primarymix = aos + sls + sttp + granuals;
    return `primary mix completed proceed next ..`;
  } else {
    return `please complete process2`;
  }
}

//==========final stage ===========//

function finalstage(status) {
  let level_3 = "true";
  if (level_3 == status) {
    const totalWeight =
      soda +
      slurry +
      freeflowSalt +
      TSP +
      globalsalt +
      aos +
      sls +
      sttp +
      granuals;
    return ` your detergent is ready  total batch weight ${totalWeight} kg...`;
  } else {
    return `please complete primary mix...`;
  }
}

function detergent() {
  const process1Status = process1("true");
  const process2Status = process2("true");
  const primarymixStatus = primarymix("cool", 7);
  const finalstageStatus = finalstage("true");

  return `${process1Status}\n${process2Status}\n${primarymixStatus}\n${finalstageStatus}`;
}
console.log(detergent());
