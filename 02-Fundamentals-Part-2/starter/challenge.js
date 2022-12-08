const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = (dolphinsAvgScore, koalasAvgScore) => {
    if(dolphinsAvgScore > koalasAvgScore)
        return `Dolphins win! ${dolphinsAvgScore} vs ${koalasAvgScore}`;
    
    if(dolphinsAvgScore < koalasAvgScore)
        return `Koalas win! ${koalasAvgScore} vs ${dolphinsAvgScore}`;
}

dolphinsAvgScore = calcAverage(44, 23, 71);
koalasAvgScore = calcAverage(65, 54, 49);
console.log(checkWinner(dolphinsAvgScore, koalasAvgScore));

dolphinsAvgScore = calcAverage(85, 54, 41);
koalasAvgScore = calcAverage(23, 34, 27);
console.log(checkWinner(dolphinsAvgScore, koalasAvgScore));

