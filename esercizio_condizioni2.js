// esercizio con if/else
let temperatura = Number(prompt('Inserisci la temperatura desiderata'));

if (temperatura < -10) {
  console.log('copriti...ancora ti raffreddi');

} else if (temperatura < 0) {
  console.log('non e’ tanto il freddo quanto l’umidità');

} else if (temperatura < 20) {
  console.log('Non ci sono più le mezze stagioni!');

} else if (temperatura < 30) {
  console.log('mi dia una peroni sudata');

} else if (temperatura >= 30) {
  console.log('lu mare, lu sole, lu ientu');

} else {
  console.log('Non ho capito; reinserisci il valore numerico');
}

// preparazione esercizio con switch
let temperatura2 = Number(prompt('Inserisci la temperatura desiderata'));
let fascia; 

if(temperatura2 < -10){
  fascia = `freddo_estremo`;
}else if(temperatura2 < 0){
  fascia = `freddo`;
}else if(temperatura2 < 20){
  fascia = `mezze_stagioni`;
}else if(temperatura2 < 30){
  fascia = `peroni`;
}else if(temperatura2 >= 30){
  fascia = `mare`;
}else{
  fascia = `errore`;
}

// ESERCIZIO CON SWITCH

switch(fascia){
    
    case `freddo_estremo`:
    console.log(`copriti...ancora ti raffreddi`);
    break;

    case `freddo`:
    console.log(`non e’ tanto il freddo quanto l’umidità`);
    break;

    case `mezze_stagioni`:
    console.log(`Non ci sono più le mezze stagioni!`);
    break;

    case `peroni`:
    console.log(`mi dia una peroni sudata`);
    break;


    case`mare`:
    console.log(`lu mare, lu sole, lu ientu`);
    break;

    default:
    console.log(`Non ho capito; reinserisci il valore numerico`);
    break;
        
    
        
    
        


    
}


