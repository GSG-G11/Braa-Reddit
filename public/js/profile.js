const card = document.querySelector(".card2");
const name1 = document.querySelector(".name");
const email = document.querySelector(".title");
const logoutBtn = document.getElementById("logout");

//user data card
fetch("/user")
  .then((data) => data.json())
  .then((value) => {
    console.log(value);
    const userNa = document.querySelector(".username");
    const name3 = document.createElement("span");
    name3.className = "user";
    name3.textContent = value[0].username;
    userNa.appendChild(name3);
    name1.textContent = value[0].username;
    email.textContent = value[0].email;
  });

//logout
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/logout").then((data) => window.location.assign("/"));
});

//user post
fetch('/userPosts').then(data=>data.json()).then(console.log)
