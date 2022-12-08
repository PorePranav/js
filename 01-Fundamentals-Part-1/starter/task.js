const billValue = 430;
const tipPercentage = billValue >= 50 && billValue <= 300 ? 15 : 20;
const total = (tipPercentage / 100) * billValue + billValue;

console.log(`The bill was ${billValue}, the tip was ${(tipPercentage / 100) * billValue}, and the total value is ${total}`);