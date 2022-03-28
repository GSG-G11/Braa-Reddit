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

{/* <div class="post-body">
<span class="by">Posted by Braa</span>
<h3 class="titlePost">what a great job</h3>
<p class="content">wow</p>
</div> */}
const posts = document.querySelector('.post-body')
//get post
fetch("/getPost")
  .then((data) => data.json())
  .then((value) =>
    value.forEach((e) => {
      const userDa = document.createElement("span");
      userDa.className='by';
      userDa.textContent = 'Posted by'+e.username;
      const titleDa = document.createElement("h3");
      titleDa.className='titlePost'
      titleDa.textContent = e.title;

      const contentDa = document.createElement("p");
      contentDa.className='content'
      contentDa.textContent = e.content;

      const section = document.createElement("section");
      section.className='cont'
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
    const username = document.createElement("span");
    username.className = "user";
    username.textContent = value[0].username;
    userNa.appendChild(username);
  });
