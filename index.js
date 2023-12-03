const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const op = document.getElementsByClassName("btn-calc");

let str = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (
      e.target.classList[1] == "btn-num" ||
      e.target.classList[1] == "btn-op"
    ) {
      str += e.target.dataset.value;
      result.innerHTML = str;
      console.log(str);
    } else if (e.target.dataset.value == "AC") {
      str = "";
      result.innerHTML = 0;
    } else if (e.target.classList[1] == "equals") {
      str = eval(str);
      result.innerHTML = str;
      console.log(str);
    }
    // else if ((e.target.dataset.value = "toggle")) {
    //   str = -str;
    //   result.innerHTML = str;
    // }
    else if ((e.target.dataset.value = "%")) {
      str = str / 100;
      result.innerHTML = str;
    } else {
      result.innerHTML = "Error";
    }
  });
});
