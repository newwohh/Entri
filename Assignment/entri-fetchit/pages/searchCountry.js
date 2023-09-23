const fetchCountry = async () => {
  let res = await fetch("https://restcountries.com/v3.1/all");

  let res2 = await res.json();

  console.log(res2);

  const searchInput = document.querySelector(".searchInput");

  const displayTitles = (results) => {
    const htmlString = results
      .map((film) => {
        return `
        <li>
          <a href="./viewCountry.html?${film.name.common}">${film.name.common}</a>
          </li>
          `;
      })
      .join("");

    document.querySelector(".ul").innerHTML = htmlString;
  };

  searchInput.addEventListener("keyup", function (e) {
    e.preventDefault();

    const currentword = e.target.value.toLowerCase();
    const filteredData = res2.filter((o) =>
      o.name.common.toLowerCase().includes(currentword)
    );

    displayTitles(filteredData);
  });
};

fetchCountry();
