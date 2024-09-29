const rating_data = document.querySelectorAll(".rating_number");
const rating_btn = document.getElementById("rating_btn");
const thank_you__rating_number = document.getElementById(
  "thank_you__rating_number"
);
const rating_container = document.getElementById("rating_container");
const thank_you_container = document.getElementById("thank_you_container");

// console.log(rating_data);

// let rating_numbers = [];

// for (let data of rating_data) {
//   rating_numbers.push(data.innerText);
// }

// console.log(rating_numbers);

//TODO: Hay que optimizar este codigo, busca la manera de encontrar el mismo resultado sin tener que usar dos ciclos for
//Optimizar
let numberClicked = 0;

rating_data.forEach((data) => {
  data.addEventListener("click", () => {
    numberClicked = data.innerText;

    for (let j = 0; j < 5; j++) {
      rating_data[j].classList.remove("clicked");
    }

    // for (const number in rating_btn) {
    //   console.log(number.classList);
    // }

    for (let i = 0; i < numberClicked; i++) {
      rating_data[i].classList.add("clicked");
    }
  });
});
//Optimizar

rating_btn.addEventListener("click", () => {
  if (numberClicked <= 0) {
    alert("Por favor selecciona un valor!");
  } else {
    thank_you__rating_number.innerText = numberClicked;

    rating_container.classList.add("hide");
    thank_you_container.classList.remove("hide");
  }
});
