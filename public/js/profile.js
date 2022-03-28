//   <div class="card2">
//         <h1>John Doe</h1>
//         <p class="title">CEO & Founder, Example</p>
//       </div>

const card = document.querySelector('.card2')
const name1= document.querySelector('.name')
const email = document.querySelector('.title')

fetch("/user")
  .then((data) => data.json())
  .then((value) => {
      console.log(value)
    const userNa = document.querySelector(".username");
    const btn = document.createElement("button");
    btn.className = "user";
    btn.textContent = value[0].username;
    userNa.appendChild(btn);
    name1.textContent=value[0].username
    email.textContent=value[0].email
  });


  const logoutBtn = document.getElementById("logout");
  
//logout
logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("/logout").then((data) => window.location.assign("/"));
  });


  //userData
//   fetch('/userInfo').then(data=>data.json()).then(console.log)