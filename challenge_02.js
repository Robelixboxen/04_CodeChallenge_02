/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

// Variablen + Einlesen
let deinAlter, deinName;
deinName = prompt("Gib bitte deinen Namen ein: ");
deinAlter = Number(prompt("Gib bitte dein Alter ein: "));
// Ausgaben
console.log("Dein Name ist: " + deinName);
// console.log(typeof deinAlter); // zum Testen des Datentyps
console.log("und du bist " + deinAlter + " Jahre alt.");

const cond = true;
switch (cond) {
    case (deinAlter <= 5):
        console.log("Hier " + deinName + " deine Milch!");
        break;
    case (deinAlter <= 12):
        console.log("Hier " + deinName + " dein Saft!");
        break;
    case (deinAlter <= 17):
        console.log("Hier " + deinName + " deine Cola!");
        break;
    case (deinAlter >= 18):
        console.log("Hier hast du deinen Wein " + deinName + ".");
        break;
    default:
        console.log("ups, da ist was schief gelaufen!");
        break;
}

