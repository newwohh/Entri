var usersURL = "https://jsonplaceholder.typicode.com/users";

var nameTr = document.querySelectorAll(".name");
var companyTr = document.querySelectorAll(".company");
var addressTr = document.querySelectorAll(".address");
var contactTr = document.querySelectorAll(".contact");
var usernameTr = document.querySelectorAll(".username");
var websiteTr = document.querySelectorAll(".website");

// var userArray = [nameTr, companyTr];

const fetchUsers = async () => {
  let res = await fetch(usersURL);

  let res2 = await res.json();

  console.log(res2);

  nameTr.forEach((user, i) => (user.innerText = res2[i].name));
  companyTr.forEach((user, i) => (user.innerText = res2[i].company.name));
  addressTr.forEach((user, i) => (user.innerText = res2[i].address.city));
  contactTr.forEach((user, i) => (user.innerText = res2[i].email));
  usernameTr.forEach((user, i) => (user.innerText = res2[i].username));
  websiteTr.forEach((user, i) => (user.innerText = res2[i].website));
};

fetchUsers();

// console.log(nameTr);
