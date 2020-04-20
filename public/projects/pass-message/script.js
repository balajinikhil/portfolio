const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const start = document.querySelector(".start");
const option = document.querySelector(".option");
const btn2 = document.querySelector(".btn2");
const table = document.querySelector(".tbl");

const firstOption = document.querySelector(".frst");
const secondOption = document.querySelector(".scnd");

const firstOptionHead = document.querySelector(".opt1head");
const secondOptionHead = document.querySelector(".opt2head");

const form1 = document.querySelector(".frm1");
const form2 = document.querySelector(".frm2");

const pros1 = document.querySelector(".pros1");
const cons1 = document.querySelector(".cons1");

const pros2 = document.querySelector(".pros2");
const cons2 = document.querySelector(".cons2");

const calc = document.querySelector(".calc");
const result = document.querySelector(".rslt");
const calculated = document.querySelector(".calculated");

const proArr1 = [];
const conArr1 = [];
const proArr2 = [];
const conArr2 = [];

btn.addEventListener("click", () => {
  start.style.display = "none";
  option.style.display = "flex";
});

option.addEventListener("submit", (e) => {
  e.preventDefault();
  option.style.display = "none";
  table.style.display = "grid";

  firstOptionHead.innerHTML = firstOption.value;
  secondOptionHead.innerHTML = secondOption.value;
});

form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const pros1val = e.target.elements.pros1ipt.value;
  const cons1val = e.target.elements.cons1ipt.value;

  if (pros1val) {
    proArr1.push(pros1val);
    pros1.innerHTML += `<li>${pros1val}</li>`;
    e.target.elements.pros1ipt.value = "";
  }
  if (cons1val) {
    conArr1.push(cons1val);
    cons1.innerHTML += `<li>${cons1val}</li>`;
    e.target.elements.cons1ipt.value = "";
  }
});

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const pros2val = e.target.elements.pros2ipt.value;
  const cons2val = e.target.elements.cons2ipt.value;

  if (pros2val) {
    proArr2.push(pros2val);
    pros2.innerHTML += `<li>${pros2val}</li>`;
    e.target.elements.pros2ipt.value = "";
  }
  if (cons2val) {
    conArr2.push(cons2val);
    cons2.innerHTML += `<li>${cons2val}</li>`;
    e.target.elements.cons2ipt.value = "";
  }
});

calc.addEventListener("click", () => {
  calculated.style.display = "block";
  if (proArr1.length > proArr2.length || conArr1.length < conArr2.length) {
    result.innerHTML = `You must go with ${firstOption.value.toUpperCase()} based on your pros and cons`;
    alert(
      `You must go with ${firstOption.value.toUpperCase()} based on your pros and cons`
    );
  } else if (
    proArr2.length > proArr1.length ||
    conArr1.length > conArr2.length
  ) {
    result.innerHTML = `You must go with ${secondOption.value.toUpperCase()} based on your pros and cons`;
    alert(
      `You must go with ${secondOption.value.toUpperCase()} based on your pros and cons`
    );
  } else {
    result.innerHTML = `Think about more pros and cons`;
    alert(`Think about more pros and cons`);
  }
});
