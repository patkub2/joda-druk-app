import { Bind, Dypl, MaloForm, WielkoForm } from "./consts/models.js";

let btnMaloForm = document.querySelector("#btnMaloForm");
let btnWielkoForm = document.querySelector("#btnWielkoForm");
let btnBind = document.querySelector("#btnBind");
let btnDypl = document.querySelector("#btnDypl");

let content = document.querySelector("#content");

function Selected(props) {
  document.getElementById("btnMaloForm").style.backgroundColor = "#000227";
  document.getElementById("btnWielkoForm").style.backgroundColor = "#000227";
  document.getElementById("btnBind").style.backgroundColor = "#000227";
  document.getElementById("btnDypl").style.backgroundColor = "#000227";

  document.getElementById("btnMaloForm").style.color = "white";
  document.getElementById("btnWielkoForm").style.color = "white";
  document.getElementById("btnBind").style.color = "white";
  document.getElementById("btnDypl").style.color = "white";
  document.getElementById(props).style.backgroundColor = "white";
  document.getElementById(props).style.color = "#000227";
}

content.innerHTML = MaloForm;
Selected("btnMaloForm");

btnMaloForm.addEventListener("click", () => {
  content.innerHTML = MaloForm;
  Selected("btnMaloForm");
});

btnWielkoForm.addEventListener("click", () => {
  content.innerHTML = WielkoForm;
  Selected("btnWielkoForm");
});

btnBind.addEventListener("click", () => {
  content.innerHTML = Bind;
  Selected("btnBind");
});
btnDypl.addEventListener("click", () => {
  content.innerHTML = Dypl;
  Selected("btnDypl");
});
