/* 
    ------------- Operatoren -------------
*/
// unaere Operatoren: math. Vorzeichen, Not-Operator, typeof
// binaere Operatoren: Addition, Subtraktion, Division, Multiplikation
// ternaere Operator(en): Bedingte Zuweisung -> const printOut = (isRaining) ? 'Es regnet' : 'Die Sonne scheint';


// const printOut = (isRaining) ? 'Es regnet' : 'Die Sonne scheint';
/* 
if (bankAccount.isEmpty() || bankAccount.getOwner().isBlocked()) {
    transaction.refuse();
    ui.setAlarm('Your transaction has been declined!');

} else {
    transaction.perform();
    ui.setConfirmation('Your transaction is in fulfillment!');
}
 */


// (bankAccount.isEmpty() || bankAccount.getOwner().isBlocked())
// ? {
//     transaction.refuse();
//     ui.setAlarm('Your transaction has been declined!');
// } : {
//     transaction.perform();
//     ui.setConfirmation('Your transaction is in fulfillment!');
// }


// const resultDiv = document.createElement('div');
// resultDiv.className = (transaction.wasSuccessful) ? 'success' : 'error';

/* 
    ------------- truthy & falsy values -------------
    falsy values:
    - false
    - undefined
    - null
    - 0
    - NaN
    - ""
*/
let username;
let password;

// Validiere Usereingaben aus Login-Formular
if (username && password) {
    // Logge den User ein
}

// Typenkonversion String zu Zahl
const numberString = 'zwoelf';
const actualNumber = parseInt(numberString);
console.log(actualNumber);
console.log(typeof actualNumber);

const anotherNumber = Number('zwoelf');
console.log(anotherNumber);
console.log(typeof anotherNumber);

// Konkatenation (engl. concatination) = "Zusammensetzung"
const firstname = 'peter';
const lastname = 'pan';
const canFly = true;
const age = 12;
const nemesis = 'Cpt. Hook';
const fullname = firstname + ' ' + lastname;
console.log(fullname);
// peter pan ist 12 Jahre alt, ist in der Lage zu fliegen und tut alle erdenklich, um Cpt. Hook eins auszuwischen.
console.log(firstname + ' ' + lastname + ' ' + 'ist ' + age + ' Jahre alt,....');
console.log(`${firstname} ${lastname} ist ${age} Jahre alt, ist ${canFly ? '' : 'NICHT'} in der Lage zu fliegen und tut alles erdenkliche, um ${nemesis} eins auszuwischen.`);

console.log(firstname.concat(' ', lastname));


// Logische Ausdruecke
const isRaining = true;
const isWearingDress = true;
const hasAnUmbrella = false;

const needsUmbrella = isRaining && isWearingDress;
const isGoingToLeaveTheHouse = isRaining && isWearingDress && hasAnUmbrella;
console.log(needsUmbrella ? 'Ohne Regenschirm wird dat wohl nix...' : 'Der Regenschirm kann heude zuhause bleiben!');
console.log(isGoingToLeaveTheHouse ? 'Ab nach draussen.' : 'Draussen is eh doof!');


/* 
    ------------- Array-Zugriffe -----------------
*/
const luckyNumbers = [13, 0, 1, 7, 33, 61]; // length = 5
const firstLuckyNumber = luckyNumbers[0];
const secondLuckyNumber = luckyNumbers[1];
const lastLuckyNumber = luckyNumbers[luckyNumbers.length - 1];
console.log(firstLuckyNumber);
console.log(secondLuckyNumber);
console.log(lastLuckyNumber);

/* 
    ------------- Array-Methoden -----------------
*/
// Array dynamisch erweitern
// Elemente am Ende anfuegen
luckyNumbers.push(9);
console.log(luckyNumbers); // [13, 0, 1, 7, 33, 61, 9]
// Elemente am Ende entfernen
luckyNumbers.pop(); 
console.log(luckyNumbers); // [13, 0, 1, 7, 33, 61]
// Elemente am Anfang anfuegen
luckyNumbers.unshift(31, 5); 
console.log(luckyNumbers); // [31, 5, 13, 0, 1, 7, 33, 61]
// Elemente vom Anfang entfernen
luckyNumbers.shift();
console.log(luckyNumbers); // [5, 13, 0, 1, 7, 33, 61]

// Mittendrin per Index entfernen
luckyNumbers.splice(2, 1);
console.log(luckyNumbers); // [5, 13, 1, 7, 33, 61]

// Werte mittendrin per Index ersetzen
luckyNumbers.splice(2, 1, 77);
console.log(luckyNumbers); // [5, 13, 77, 7, 33, 61]

// Werte mittendrin per Index hinzufuegen
luckyNumbers.splice(2, 0, 100, 99, 98, 97);
console.log(luckyNumbers); // [5, 13, 100, 99, 98, 97, 77, 7, 33, 61]



/* 
    ------------- 2D-Arrays -----------------
*/
const chatRooms = [
    ['vodkasusi123', 'peterDerGrosse', 'lustigerMax99', 'WillmaRuhe'],
    ['styla_mayla_77', 'derEchteAdmin', 'derPwoGwammer'],
];
const coordinates = [
    [12.64, 2],
    [-77.6, 99.5]
];
const measurements = [
    [12, 10, 11.5],
    [-5, -2, 0]
];


/* 
    ---------- Schleifen (engl. Loops) -----------
    For-Schleife: Laeuft eine definierte Anzahl von Durchlaeufen durch
    While-Schleife: Laeuft solange eine bestimmte Laufbedingung erfuellt ist
*/
const usernames = ['vodkasusi123', 'peterDerGrosse', 'lustigerMax99', 'WillmaRuhe'];
let greetingTemplate = 'Hello, ';

// for (let i = 0; i < usernames.length; i++) {
//     const currentUsername = usernames[i];
//     console.log(greetingTemplate + currentUsername + '!');
// }


const diceResults = [];

// for (let i = 0; i < 6; i++) {
//     const randomDice = Math.ceil(Math.random() * 6);

//     let foundDouble = false;
//     for (let j = 0; j < diceResults.length; j++) {
//         if (diceResults[j] === randomDice) {
//             foundDouble = true;
//         }
//     }

//     if (!foundDouble) {
//         diceResults.push(randomDice);
//         diceResults.sort();
//     }
// }

let counter = 0;
while (diceResults.length < 6) {
    const randomDice = Math.ceil(Math.random() * 6);

    let foundDouble = false;
    for (let j = 0; j < diceResults.length; j++) {
        if (diceResults[j] === randomDice) {
            foundDouble = true;
        }
    }

    if (!foundDouble) {
        diceResults.push(randomDice);
        diceResults.sort();
    }

    counter++;
}
console.log(diceResults);
console.log(counter, 'durchlaeufe');
