function backtick(mele, arance) {
  const succo = `Succo con ${mele} mele ${arance} arance.`;
  return succo;
}

document.getElementById("corretta").innerHTML = backtick(5, 4);
document.getElementById("sbagliata").innerHTML = backtick(6);


function backtick2(anno, nascita) {
  const miaeta = `${anno - nascita} anni.`;
  return miaeta;
}

document.getElementById("eta").innerHTML += backtick2(2022, 1967);


function backtick3(nome, anni) {
  const annodinascita = `L\'anno di nascita di ${nome} è ${2022 - anni}`;
  return annodinascita;
}

document.getElementById("persona1").innerHTML = backtick3("Anna", 30);
document.getElementById("persona2").innerHTML = backtick3("Maria", 24);


var btn = document.getElementById("calcola")

btn.addEventListener("click", function () {
  let uno = Number(document.getElementById("cibo").value);
  let due = Number(document.getElementById("detersivi").value);
  let tre = Number(document.getElementById("abiti").value);

  let tot = uno + due + tre;
  document.getElementById("totale").innerHTML += tot;
});

