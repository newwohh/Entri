let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/users ")
    .then((res) => res.json())
    .then((data) => console.log(data));
});
