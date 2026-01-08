let somma = 0;
let contatore = 0;
// numero pari= numero % === 0
// numero dispari= numero % !== 0
for(let i = 1; i <= 20; i++){

    if(i % 2 === 0){
        
        console.log(i); //pari
        
    }else{
        somma += i; //somma = somma + i;
        contatore++;
    }
    
}

let media = somma / contatore;
console.log(`media dei numeri dispari:`, media);
