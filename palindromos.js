const readline = require('readline');
const word = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
word.question('Introduzca una palabra: ', (input)=> {
    const resultado = palindrome(input);
    word.close();
});

function palindrome(str) {

    str = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    
    const palabraInvertida = str.split('').reverse().join('');
    
    if (str == palabraInvertida){

        console.log(`${str} es un palíndromo `);
        return true;

    }else{
        console.log(`${str} no es un palíndromo `);
        return false;
    }

}




