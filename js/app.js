const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

const validateCardDetails = element => {
  let array = Array.from(element);
  console.log(array);
  let numberCard = parseInt(array[0].value);
  console.log(numberCard);
  let cvv = parseInt(array[2].value);
  let name = array[3].value;

  verificationCvv(cvv);
  validateNumberCard(numberCard);
  validationName(name);

}

// Validar codigo de verificación
let verificationCvv = cvv => {
  cvv="<form><iput>..."
  let bordercvv = document.getElementById("cvv");
  if(cvv != "" && cvv >= 000 && cvv <= 999 && typeof cvv == "number"){
    bordercvv.classList.add("validation");
  } else {
    bordercvv.classList.add("error");

  }

}

let validateNumberCard = numberCard => {
    if(numberCard.length === 16){
      console.log("válido");
    }else {
      console.log("inválido");
    }
  }

let validationName = name => {
  let borderName = document.getElementById("name");
  if(name != " ") {
    borderName.classList.add("validation");
  }else {
    borderName.classList.add("error");
  }

}







  // Algoritmo de Lunh

  // function luhnAlgorithm(cardNumbers) {
  //   let cardNumbersReversed = cardNumbers;
  //   .toString();
  //   .split("");
  //   .reverse();
  //   .map(number => parseInt(number));


// 9879987698769678
// cvv ó array.length===3 valido(verde)
