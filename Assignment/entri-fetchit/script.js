const fetchCountry = async () => {
  let res = await fetch("https://restcountries.com/v3.1/all");

  let res2 = await res.json();

  console.log(res2);
};

fetchCountry();
