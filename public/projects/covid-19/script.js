const date = document.querySelector(".lastUpdate");
const btn = document.querySelector(".btn");
// India data
const newConfirmedInd = document.querySelector(".newConfirmedInd");
const totalConfirmedInd = document.querySelector(".totalConfirmedInd");
const newDeathsInd = document.querySelector(".newDeathsInd");
const totalDeathsInd = document.querySelector(".totalDeathsInd");
const newRecoveredInd = document.querySelector(".newRecoveredInd");
const totalRecoveredInd = document.querySelector(".totalRecoveredInd");

// World data
const newConfirmed = document.querySelector(".newConfirmed");
const totalConfirmed = document.querySelector(".totalConfirmed");
const newDeaths = document.querySelector(".newDeaths");
const totalDeaths = document.querySelector(".totalDeaths");
const newRecovered = document.querySelector(".newRecovered");
const totalRecovered = document.querySelector(".totalRecovered");

const updateData = (ind, wrld, dateUp) => {
  date.innerHTML = `${new Date(dateUp).toUTCString()}`;
  newConfirmedInd.innerHTML = `${ind.NewConfirmed}+`;
  totalConfirmedInd.innerHTML = `${ind.TotalConfirmed}`;
  newDeathsInd.innerHTML = `${ind.NewDeaths}+`;
  totalDeathsInd.innerHTML = `${ind.TotalDeaths}`;
  newRecoveredInd.innerHTML = `${ind.NewRecovered}+`;
  totalRecoveredInd.innerHTML = `${ind.TotalRecovered}`;

  newConfirmed.innerHTML = `${wrld.NewConfirmed}+`;
  totalConfirmed.innerHTML = `${wrld.TotalConfirmed}`;
  newDeaths.innerHTML = `${wrld.NewDeaths}+`;
  totalDeaths.innerHTML = `${wrld.TotalDeaths}`;
  newRecovered.innerHTML = `${wrld.NewRecovered}+`;
  totalRecovered.innerHTML = `${wrld.TotalRecovered}`;
};

const getData = async () => {
  try {
    const dt = await fetch("https://api.covid19api.com/summary");
    console.log(dt);
    const data = await dt.json();
    console.log(data);
    const countries = await data.Countries;
    updateData(countries[101], data.Global, data.Date);
  } catch (err) {
    date.innerHTML = `Server Busy Try After Some Time`;
    alert("Server busy try again");
  }
};

btn.addEventListener("click", () => {
  alert("Go Corona Go");
  getData();
});

getData();
