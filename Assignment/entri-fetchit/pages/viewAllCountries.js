var cardContainer = document.querySelector(".content");

const fetchCountry = async () => {
  let res = await fetch("https://restcountries.com/v3.1/all");

  let res2 = await res.json();

  console.log(res2);

  res2.forEach((el) => {
    let cardLink = document.createElement("div");
    let imgLink = document.createElement("img");
    let bodyLink = document.createElement("div");
    let hLink = document.createElement("h5");
    let pLink = document.createElement("p");
    let detailsLink = document.createElement("details");
    let capitalLink = document.createElement("p");

    cardLink.style.height = "350px";
    cardLink.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    imgLink.style.height = "200px";

    cardLink.className = "card content";
    imgLink.className = "card-img-top";
    bodyLink.className = "card-body";
    hLink.className = "card-title";
    pLink.className = "card-text";

    imgLink.src = el.flags.png;
    hLink.innerText = el.name.common;
    capitalLink.innerText = `Capital: ${el.capital[0]}
    Time Zone:${el.timezones[0]}
    Continents:${el.continents[0]}
    Population: ${el.population}`;

    document.querySelector(".container").appendChild(cardLink);
    cardLink.appendChild(imgLink);
    cardLink.appendChild(bodyLink);
    cardLink.appendChild(hLink);
    cardLink.appendChild(pLink);
    bodyLink.appendChild(detailsLink);
    detailsLink.appendChild(capitalLink);
  });
};

fetchCountry();
