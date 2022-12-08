function fruitProcessor(apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
}

function cutFruitPieces(fruit){
    return fruit * 4;
}

console.log(fruitProcessor(2, 3));

