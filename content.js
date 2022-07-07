import { Bind, Dypl, MaloForm, WielkoForm } from "./consts/models.js";

let btnMaloForm = document.querySelector("#btnMaloForm");
let btnWielkoForm = document.querySelector("#btnWielkoForm");
let btnBind = document.querySelector("#btnBind");
let btnDypl = document.querySelector("#btnDypl");

let content = document.querySelector("#content");

btnMaloForm.addEventListener("click", () => {
  content.innerHTML = MaloForm;
});

btnWielkoForm.addEventListener("click", () => {
  content.innerHTML = WielkoForm;
});

btnBind.addEventListener("click", () => {
  content.innerHTML = Bind;
});
btnDypl.addEventListener("click", () => {
  content.innerHTML = Dypl;
});
