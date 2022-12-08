const calcTip = billValue => {
    let tipPercentage;
    if(billValue >= 50 && billValue <= 300)
        tipPercentage = 0.15;
    else
        tipPercentage = 0.2;
    
    return billValue * tipPercentage; 
}

bills = [125, 555, 44];
totals = [];
tips = [];

for(let i = 0; i < bills.length; i++){
    let tip = calcTip(bills[i]);
    totals.push(tip + bills[i]);
    tips.push(tip);
}

console.log(totals, tips);