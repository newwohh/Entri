async function fetchCountry() {
  let res = await fetch("https://restcountries.com/v3.1/all");

  let res2 = await res.json();

  const { host, hostname, href, origin, pathname, port, protocol, search } =
    window.location;

  let queryName = search.toString().replace("?", "");

  let findCountry = res2.filter((country) => {
    if (country.name.common === queryName) {
      return country;
    }
  });

  console.log(findCountry);

  let countryImg = document.querySelector(".card-img");
  let countryTitle = document.querySelector(".card-title");
  let countryContinent = document.querySelector(".continent");
  let cardText = document.querySelector(".card-text");
  let gMap = document.querySelector(".gMap");

  findCountry.forEach((element) => {
    document.title = `Fetch It | ${element.name.common}`;
    countryImg.src = element.flags.png;
    countryTitle.innerText = element.name.common;
    countryContinent.innerText = `Continent: ${element.continents[0]}`;
    cardText.innerText = `${element.name.common} is a country population of ${element.population}.
     The capital of ${element.name.common} is ${element.capital[0]}. Timezone of ${element.name.common} is ${element.timezones}`;
    gMap.src = `//maps.google.com/maps?q=${element.latlng[0]},${element.latlng[1]}&z=15&output=embed`;
  });
}

fetchCountry();
