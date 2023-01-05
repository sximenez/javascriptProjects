// VAR

let input = document.getElementById("input");
let convertFromCelsius = document.getElementById("cel");
let convertFromFahrenheit = document.getElementById("far");
let output = document.getElementById("output");
let reset = document.getElementById("reset");

// ACTIONS

convertFromCelsius.addEventListener("click",
  function () {
    if ((input.value !== "") && input.value >= -273) {
      output.value = parseInt(input.value * (9 / 5) + 32);
    }
  }
)

convertFromFahrenheit.addEventListener("click",
  function () {
    if ((input.value !== "") && input.value >= -273) {
      output.value = parseInt((input.value - 32) * (5 / 9));
    }
  }
)

reset.addEventListener("click", () => {
  input.value = "";
  output.value = "";
})