
// esercizio con condizioni if/else
    let voto = 22;
if(voto < 18 && voto >= 0){
    console.log(`Insufficiente!`);
    
}else if(voto >= 18 && voto < 21){
    console.log(`Sufficiente!`);
    
}else if(voto >= 21 && voto < 24){
    console.log(`Buono!`);
    
}else if(voto >= 24 && voto < 27){
    console.log(`Distinto!`);
    
}else if(voto >= 27 && voto <= 29){
    console.log(`Ottimo!`);
    
    
}else if(voto === 30){
    console.log(`Eccellente!`);
    
}else{
    console.log(`Voto non valido!`);
    
};


// esercizio con lo switch
let voto2 = 18;
switch(voto2){
    case 1:
    case 2:
    case 3:    
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    
    console.log(`Insufficiente!`);
    break;
    
    case 18:
    case 19:
    case 20:        
    
    
    console.log(`Sufficiente`);
    break;
    
    case 21:
    case 22:
    case 23:
    
    console.log(`Buono`);
    break;
    
    case 24:
    case 25:
    case 26:
    
    console.log(`Distinto!`);
    break;
    
    case 27:
    case 28:
    case 29:
    
    console.log(`Ottimo!`);
    break;
    
    
    case 30:
    console.log(`Eccellente!`);
    break;
    
    
    default:
    console.log(`Voto non valido!`);
    break;
    
    
    
    
    
    
    
    
    
    
}


// esercizio bonus con if/else + voto3 casuale da 0 a 30

let voto3 = Math.floor(Math.random() * (30 - 0 + 1) + 0);
console.log(`Voto estratto casualmente: ${voto3}`);
if(voto3 < 18 && voto3 >= 0){
    console.log(`Insufficiente!`);
    
}else if(voto3 >= 18 && voto3 < 21){
    console.log(`Sufficiente!`);
    
}else if(voto3 >= 21 && voto3 < 24){
    console.log(`Buono!`);
    
}else if(voto3 >= 24 && voto3 < 27){
    console.log(`Distinto!`);
    
}else if(voto3 >= 27 && voto3 <= 29){
    console.log(`Ottimo!`);
    
    
}else if(voto3 === 30){
    console.log(`Eccellente!`);
    
}else{
    console.log(`Voto non valido!`);
    
}



