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
  }).then((data) => window.location.assign("/home"));
});

const posts = document.getElementById("posts");

//get post
fetch("/getPost")
  .then((data) => data.json())
  .then((value) =>
    value.forEach((e) => {
      const userDa = document.createElement("h2");
      userDa.textContent = e.username;

      const titleDa = document.createElement("h3");
      titleDa.textContent = e.title;

      const contentDa = document.createElement("p");
      contentDa.textContent = e.content;

      const section = document.createElement("section");
      section.appendChild(userDa);
      section.appendChild(titleDa);
      section.appendChild(contentDa);

      posts.appendChild(section);
    })
  );

//get username to person was login
fetch("/user")
  .then((data) => data.json())
  .then((value) => {
    const userNa = document.querySelector(".username");
    const btn = document.createElement("button");
    btn.className = "user";
    btn.textContent = value[0].username;
    userNa.appendChild(btn);
  });
