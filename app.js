function color(clrCarta = 0) {
  aleatNum = parseInt(clrCarta);

  //generar iconos con mapa de caracteres de sistema operativo
  switch (aleatNum) {
    case 1: return "♦";
      break;
    case 2: return "♠";
      break;
    case 3: return "♣";
      break;
    case 4: return "♥"
      break;
  }
}

function clrRndm() {
  let clrName = [];
  let cardNumRndm = Math.floor((Math.random() * 10 % 4) + 1);
  let clrRndm = color(cardNumRndm);
  clrName.push(clrRndm);
  let top = document.querySelector(".side-top");
  top.innerHTML = clrRndm;
  let bottom = document.querySelector(".side-bottom");
  bottom.innerHTML = clrRndm;
  bottom.style.transform = 'rotate(180deg)'
  
  if (cardNumRndm == 1 || cardNumRndm == 4) {
    top.style.color = "red";
    top.style.fontSize = "50px";
    bottom.style.color = "red";
    bottom.style.fontSize = "50px";
  } else {
    top.style.color = "black";
    top.style.fontSize = "50px";
    bottom.style.color = "black";
    bottom.style.fontSize = "50px";
  }
  console.log(clrName);
}

function numerosHTML() {
  let listado = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let listadoRndm = Math.floor(Math.random() * listado.length);
  let body = document.querySelector(".centro");
  body.innerHTML = listado[listadoRndm];
  
}


clrRndm();