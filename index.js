const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

const op = ["+", "-", "*", "/", "%", "="];

let output = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btnVal = e.target.dataset.value;

    if (btnVal === "=" && output != "") {
      output = eval(output.replace("%", "/100"));
    } else if (btnVal === "AC") {
      output = "";
    } else if (btnVal == "toggle") {
      output = -output;
    } else {
      if (output === "" && op.includes(btnVal)) return;
      output += btnVal;
    }
    result.innerHTML = output;
  });
});
