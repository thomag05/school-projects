//Oppgave 1
let Numbers = [];

function CountNumbers() {
  for (let i = -20; i <= 20; i++) {
    Numbers.push(i);

    if (i === -13) {
      Numbers.pop();
      continue;
    }
    if (i === 13) {
      Numbers.pop();
    } else {
      console.log(i);
    }
  }
}
CountNumbers();
let utskriftOppg1 = (document.getElementById("utskriftOppg1").innerHTML =
  Numbers);

//Oppgave 2
let alfabet = "abcdefghijklmnopqrstvuwxyzøæå";
let HALLO = alfabet[7] + alfabet[0] + alfabet[11] + alfabet[11] + alfabet[14];
let utskriftOppg2 = (document.querySelector("#utskriftOppg2").innerHTML =
  HALLO.toUpperCase());
//Oppgave 3

let knappOppg3 = document.querySelector("#btnOppg3");
knappOppg3.addEventListener("click", oppg3);
let utskriftOppg3 = document.querySelector("#utskriftOppg3");
function oppg3() {
  let name = prompt("What is your name");
  let length = name.length;
  //   console.log(
  //     "Hei, " + name + ". Så kult at navnet ditt har " + length + " bokstaver"
  //   );
  utskriftOppg3.innerHTML =
    "Hei, " + name + ". Så kult at navnet ditt har " + length + " bokstaver";
}

//Oppgave 4

let superhelter = [
  "Superman",
  "Thor",
  "Hulk",
  "Dr. Manhattan",
  "Flash",
  "Goku",
  "Silver Surfer",
  "One-Above-All",
  "Green Lantern",
  "Doctor Strange",
];
let utskriftOppg4 = document.querySelector("#utskriftOppg4");

let orderL = document.createElement("ol");
utskriftOppg4.appendChild(orderL);
function superheroes() {
  for (let i = 0; i < superhelter.length; i++) {
    let li = document.createElement("li");
    orderL.appendChild(li);
    li.innerHTML = li.innerHTML + superhelter[i];
  }
  knappOppg4.remove();
}
let knappOppg4 = document.querySelector("#btnOppg4");
knappOppg4.addEventListener("click", superheroes);

//Oppgave 5
let btnGul = document.querySelector("#gul");
let btnRosa = document.querySelector("#pink");
let btnGreen = document.querySelector("#green");
let btnBlack = document.querySelector("#black");

function btnYellow() {
  if (document.getElementById("oppgave5").style.backgroundColor === "yellow") {
    document.getElementById("oppgave5").style.backgroundColor = "black";
    document.getElementById("gul").innerHTML = "  Gul";
  } else {
    document.getElementById("oppgave5").style.backgroundColor = "yellow";
    document.getElementById("gul").innerHTML = "Black";
    document.getElementById("pink").innerHTML = "Rosa";
    document.getElementById("green").innerHTML = "Grøn";
  }
}
function btnPink() {
  if (document.getElementById("oppgave5").style.backgroundColor === "pink") {
    document.getElementById("oppgave5").style.backgroundColor = "black";
    document.getElementById("pink").innerHTML = "Rosa";
  } else {
    document.getElementById("oppgave5").style.backgroundColor = "pink";
    document.getElementById("pink").innerHTML = "Black";
    document.getElementById("green").innerHTML = "Grøn";
    document.getElementById("gul").innerHTML = "Gul";
  }
}
function btnGrøn() {
  if (document.getElementById("oppgave5").style.backgroundColor === "green") {
    document.getElementById("oppgave5").style.backgroundColor = "black";
    document.getElementById("green").innerHTML = "Grøn";
  } else {
    document.getElementById("oppgave5").style.backgroundColor = "green";
    document.getElementById("green").innerHTML = "Black";
    document.getElementById("gul").innerHTML = "Gul";
    document.getElementById("pink").innerHTML = "Rosa";
  }
}

btnGul.addEventListener("click", btnYellow);
btnRosa.addEventListener("click", btnPink);
btnGreen.addEventListener("click", btnGrøn);
