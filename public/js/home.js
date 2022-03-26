const logoutBtn = document.getElementById("logout");
const title = document.getElementById("title");
const content = document.getElementById("content");
const saveButton = document.getElementById("saveButton");

//logout
logoutBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/logout").then((data) => window.location.assign("/"));
});

//add post
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/addpost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({
      title: title.value,
      content: content.value,
    }),
  })
    .then((data) => 
    window.location.assign('/home')
    )
    
});
