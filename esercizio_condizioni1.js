
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
let voto2 = 29;
let giudizio;

if(voto2 < 18){
    
    
giudizio = `insufficiente`;
    

}else if(voto2 < 21 ){
    
    
    
giudizio = `sufficiente`;
    
    
    
}else if(voto2 < 24){
    
    
giudizio = `buono`;
    
    
    
}else if(voto2 < 27){
    
    
giudizio = `distinto`;
    
    
}else if(voto2 <= 29){
    
    
    giudizio = `ottimo`;
    

}else if(voto2 === 30){
    
    
    
giudizio = `eccellente`;
    

}else{
    
    
giudizio = `voto non valido`;
    
    
}


switch(giudizio){
    
    case `insufficiente`:
    console.log(`Insufficiente`);
    break;
    
    case `sufficiente`:
    console.log(`sufficiente`);
    break;
    
    case `buono`:
    console.log(`buono`);
    break;
    
    case `distinto`:
    console.log(`distinto`);
    break;
    
    case `ottimo`:
    console.log(`ottimo`);
    break;
    
    case `eccellente`:
    console.log(`eccellente`);
    break;
    
    
    default:
    console.log(`voto non valido`);
    
    
    
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



