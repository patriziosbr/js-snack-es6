// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//----------FUNCTION

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  
//----------/FUNCTION


var footBallTeams = [

    {
        'nome': "roma",
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': "lazio",
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': "barcellona",
        'punti_fatti': 0,
        'falli_subiti': 0
    },
    {
        'nome': "milan",
        'punti_fatti': 0,
        'falli_subiti': 0
    }
];

var scores = [];

for (let i=0; i < footBallTeams.length; i++) {
    // Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
    footBallTeams[i]["falli_subiti"] = getRndInteger(1, 50);
    footBallTeams[i]["punti_fatti"] = getRndInteger(1, 50);

    // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
    let {nome, falli_subiti} = footBallTeams[i];

    scores.push({nome, falli_subiti});

}
console.log(scores);

