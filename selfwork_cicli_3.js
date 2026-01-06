// Eswercizio distributore bevande

let selezione;
while(selezione !== `1` && selezione !== `2` && selezione !== `3`){
    selezione = prompt(
        `seleziona la bevanda:\n` +
        `1-acqua\n` +
        `2-coca-cola\n` +
        `3-birra`
    );
}

if(selezione === `1`){
    console.log(`hai selezionato: acqua`);
    
}else if(selezione === `2`){
    console.log(`hai selezionato: coca-cola`);
    
}else{
    console.log(`hai selezionato: birra`);
    
}

// ESERCIZIO EXTRA
let selezione2;
while(selezione2 !== `acqua` && selezione2 !== `coca-cola` && selezione2 !== `birra`){
  
    selezione2 = prompt(
         `seleziona la bevanda:\n` +
        `acqua\n` +
        `coca-cola\n` +
        `birra`
    );
}

if(selezione2 === `acqua`){
    console.log(`hai selezionato: acqua`);
    
}else if(selezione2 === `coca-cola`){
    console.log(`hai selezionato:coca-cola`);
    
}else{
    console.log(`hai selezionato: birra`);
    
}