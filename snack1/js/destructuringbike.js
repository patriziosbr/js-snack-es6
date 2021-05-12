// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.


var biciclette = [
    
    {
        nome: "Raleghi",
        peso: 9
    },
    {
        nome: "Rock Ride",
        peso: 6
    },
    {
        nome: "bianchi",
        peso: 12
    },
    {
        nome: "pursuit",
        peso: 8
    }

];


var check = biciclette[0]; 

for (let i = 0; i < biciclette.length; i++) {
   
    let {peso} = biciclette[i];

    if ( peso < check.peso ) {
        check = peso;
    }
}    
console.log(check);

document.getElementById('pesoBike').innerHTML = ` 
l peso minore è ${check}
`
console.log(`l peso minore è ${check}`);


// var checkPeso = biciclette[0]; 

// for (let i = 0; i < biciclette.length; i++) {
//     var bikeCheck = biciclette[i];
//     // let {peso} = biciclette[i];
//     // console.log(peso);
   
    
//     if (checkPeso.peso > bikeCheck.peso) {
//         checkPeso = bikeCheck;
//     }
// }    
// console.log(checkPeso);