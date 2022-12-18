'use strict';

function calcAge(birthYear){
    const age = 2022 - birthYear;

    function printAge(){
        const output = `You are ${age}, born in the year ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            console.log(`Oh, and you are a millenial ${firstName}`); 

            function add(a, b){
                return a + b;
            }
        }

        
        console.log(millenial);
    }
    printAge();

    return age;
}

const firstName = "Pranav";
calcAge(2003);
