const posts = document.querySelector(".post-body");
const saveButton = document.querySelector("#saveButton");
const content = document.querySelector("#content");
const comentDev = document.querySelector('.comentDev')
const id = window.location.href.split("/")[4];
// get single post
fetch(`/comment/${id}`)
  .then((data) => data.json())
  .then((value) => {
    const userDa = document.createElement("span");
    userDa.className = "by";
    userDa.textContent = "Posted by";
    const titleDa = document.createElement("h3");
    titleDa.className = "titlePost";
    titleDa.textContent = value[0].title;
    const a = document.createElement("a");
    a.className = "by2";
    a.textContent = value[0].username;
    const contentDa = document.createElement("p");
    contentDa.className = "content";
    contentDa.textContent = value[0].content;
    const section = document.createElement("section");
    section.className = "cont2";
    section.appendChild(userDa);
    section.appendChild(a);
    section.appendChild(titleDa);
    section.appendChild(contentDa);
    posts.appendChild(section);
  });

//add comment
saveButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`/addComment/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content.value,
    }),
  })
    .then((value) => value.json())
    .then(() => window.location.assign(`/comments/${id}/show`));
});

//get comment
//{id: 7, post_id: 1, content: 'asdfgh', username: 'ahmed'}


// <!-- <section class="cont2">
// <span class="by">Posted by Braa</span>
// <p class="content">comments</p>
// </section>  -->
fetch(`/showComment/${id}`)
  .then((data) => data.json())
  .then(value=>{
      value.forEach(e => {
        const userDa = document.createElement("span");
        userDa.className = "by";
        userDa.textContent = "Posted by";
        const a = document.createElement("a");
        a.className = "by2";
        a.textContent = e.username;
        const contentDa = document.createElement("p");
        contentDa.className = "content";
        contentDa.textContent = e.content;
        const section = document.createElement("section");
        section.className = "cont2";
        section.appendChild(userDa);
        section.appendChild(a);
        section.appendChild(contentDa);
        comentDev.appendChild(section);
      });

  });
