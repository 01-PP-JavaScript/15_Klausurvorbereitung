/* DATENSTRUKTUREN */

/* Primitive Variablen */

/*
let a;  // Deklaration / Definition

//a = true;   // Boolean  (false, true)
//a = "hi"    // String
//a = 2;      // Number

console.log(a);
console.log(typeof a);
*/

/* Arrays */

//let arr = new Array(); 

/*
let arr = ["a","b","c","d"];
//let arr = [true,true,false];
//let arr = [2, "hi", true]; // nicht zu empfehlen

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr.length);

console.log(arr[7]);
console.log(arr[3]); // letztes Element
console.log(arr[arr.length - 1]); //
*/

/*
let arr = [];
arr.push("a");
console.log(arr);
arr.push("b");
console.log(arr);
arr.pop();
console.log(arr);
console.log(typeof arr);
*/

/* Objekte */

/*
let obj = {};
console.log(obj);
*/

/*
let obj =   {
                x:10,
                y:"hi"
            }

console.log(obj);
console.log(obj.x);
console.log(obj.y);
obj.x = 11;
console.log(obj);
console.log(obj.x);
*/

/*
let obj = {
            sub1:{
                    val: "hi",
                    sub2:{
                            val: "hallo"
                            }
                    }
}

// Nested Object  {{{}}}

console.log(obj);
console.log(obj.sub1.val);
console.log(obj.sub1.sub2.val);
*/

// xml,html --> Hierarchien
// DOM Document Object Model
// DOM wird nach dem Parsen/Laden der Seite angelegt

/* DOM */
//Document Object Model 

/*
console.log(document);
console.log(document.body);
console.log(document.body.children);
console.log(document.body.children[0]);
console.log(document.body.children[0].innerHTML);
console.log(document.body.children[0].innerText);
document.body.children[0].innerText = "Hallo!";
*/

/*
console.log(document.getElementById("test"));
console.log(document.getElementById("Test"));
document.body.children[1].innerText = "Neuer Text";
document.getElementById("test").innerHTML = "Neuerer Text";
console.log(document.getElementById("test"));
*/

/* ENTSCHEIDUNGSSTRUKTUREN */

/*
let cond;
cond = (6 > 4);
cond = (6 < 4);
cond = (4 == 4);

cond = (4 == "4");
//cond = (4 === "4");
// = Zuweisung | == VERGLEICH!! | === VERGLEICH!!

console.log(cond);

if (cond) {
    console.log("Aussage wahr!");
} else {
    console.log("Aussage falsch!");
}
*/

/* FUNKTIONEN */

/* // 1. Kapselung
function test() {  // Fkt.-Rumpf
    console.log("Testausgabe");
}

test(); // Fkt.-Call
*/

/* // 2.return
function test() {  // Fkt.-Rumpf
    //... macht irgendwas
    let ausgabe = "Testausgabe";
    return ausgabe;
    // Lieferung an die Stelle des Aufrufs / Call
    console.log("hi");
}

console.log(test());
*/

/*
// 3. Parameter
function test(firstName,famName) {  // Fkt.-Rumpf
    let gruss = "Hallo " + firstName + " " + famName + "!";
    return gruss;
}

//Argument --> daten für Param
console.log(test("Imran","Malik")); 
*/ 

// 4. Fkt.-Call aus Funktion
function test(firstName,famName) {  // Fkt.-Rumpf
    let gruss = grussformel() + firstName + " " + famName + "!";
    return gruss;
}

function grussformel() {
    return "Hi ";
}

//Argument --> daten für Param
console.log(test("Imran","Malik")); 

// rechner()
// summe --> a + b
// diff --> a-b

