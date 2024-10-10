let cardNum = document.getElementById("text");
let cardCvv = document.getElementById("cvv");

// function For Card Number Input:

cardNum.addEventListener("input", () => {
  // Remove any non-numeric characters:
  cardNum.value = cardNum.value.replace(/\D/g, "");

  // to change the logo Img I need only First 4 digits :
  let fun = cardNum.value.slice(0, 4);

  // ( 5100 ) is The beginning of Master Card:
  if (fun === "5100") {
    let logo = document.getElementById("logo");
    logo.setAttribute("src", "Images/master.png");

    // ( 4147 ) is The beginning of VISA Card:
  } else if (fun === "4147") {
    logo.setAttribute("src", "Images/visa.png");

    // return to the default Logo Img:
  } else {
    logo.setAttribute("src", "Images/logo.png");
  }
});

// *********************************************************

// function For CVV Input:

cardCvv.addEventListener("input", () => {
  // Remove any non-numeric characters:
  cardCvv.value = cardCvv.value.replace(/\D/g, "");
});
