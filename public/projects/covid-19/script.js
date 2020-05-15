const date = document.querySelector(".lastUpdate");
const btn = document.querySelector(".btn");
const searchBtn = document.querySelector(".btn-1");
const ipt = document.querySelector(".ipt");
const chg = document.querySelector(".chg");
// India data

// World data
const newConfirmed = document.querySelector(".newConfirmed");
const totalConfirmed = document.querySelector(".totalConfirmed");
const newDeaths = document.querySelector(".newDeaths");
const totalDeaths = document.querySelector(".totalDeaths");
const newRecovered = document.querySelector(".newRecovered");
const totalRecovered = document.querySelector(".totalRecovered");

// All Countries
const allCountries = document.querySelector(".all-cont");

function nC(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const updateData = (ind, wrld, dateUp, allCon) => {
  date.innerHTML = `${new Date(dateUp).toUTCString()}`;

  newConfirmed.innerHTML = `${nC(wrld.NewConfirmed)}+`;
  totalConfirmed.innerHTML = `${nC(wrld.TotalConfirmed)}`;
  newDeaths.innerHTML = `${nC(wrld.NewDeaths)}+`;
  totalDeaths.innerHTML = `${nC(wrld.TotalDeaths)}`;
  newRecovered.innerHTML = `${nC(wrld.NewRecovered)}+`;
  totalRecovered.innerHTML = `${nC(wrld.TotalRecovered)}`;

  allCon.forEach((e, i) => {
    allCountries.innerHTML += ` <h3>${i + 1}.${e.Country}</h3>
      <div class="head-data">
        <p>New Confirmed <span class="newConfirmed">${nC(
          e.NewConfirmed
        )}</span></p>
        <p>Total Confirmed <span class="totalConfirmed">${nC(
          e.TotalConfirmed
        )}</span></p>
        <p>New Deaths <span class="newDeaths">${nC(e.NewDeaths)}</span></p>
        <p>Total Deaths <span class="totalDeaths">${nC(
          e.TotalDeaths
        )}</span></p>
        <p>New Recovered <span class="newRecovered">${nC(
          e.NewRecovered
        )}</span></p>
        <p>Total Recovered <span class="totalRecovered">${nC(
          e.TotalRecovered
        )}</span></p>
      </div>`;
  });

  searchBtn.addEventListener("click", () => {
    chg.innerHTML = `Search Result`;

    const val = ipt.value.trim().toLowerCase();

    let found = false;

    for (let i = 0; i < allCon.length; i++) {
      if (allCon[i].Country.trim().toLowerCase().includes(val)) {
        found = true;
        let e = allCon[i];
        allCountries.innerHTML = ` <h3>${e.Country}</h3>
      <div class="head-data">
        <p>New Confirmed <span class="newConfirmed">${nC(
          e.NewConfirmed
        )}</span></p>
        <p>Total Confirmed <span class="totalConfirmed">${nC(
          e.TotalConfirmed
        )}</span></p>
        <p>New Deaths <span class="newDeaths">${nC(e.NewDeaths)}</span></p>
        <p>Total Deaths <span class="totalDeaths">${nC(
          e.TotalDeaths
        )}</span></p>
        <p>New Recovered <span class="newRecovered">${nC(
          e.NewRecovered
        )}</span></p>
        <p>Total Recovered <span class="totalRecovered">${nC(
          e.TotalRecovered
        )}</span></p>
      </div>`;
      }
    }

    if (!found) {
      allCountries.innerHTML = `No results found`;
    }

    ipt.value = "";
  });
};

const getData = async () => {
  try {
    const dt = await fetch("https://api.covid19api.com/summary");
    const data = await dt.json();
    console.log(data);

    // const c = await fetch(
    //   "https://api.covid19api.com/live/country/india/status/confirmed"
    // );
    // const cd = await c.json();

    const countries = await data.Countries;
    updateData(countries[99], data.Global, data.Date, data.Countries);
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
