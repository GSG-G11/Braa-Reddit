const logoutBtn = document.getElementById('logout')

//logout
logoutBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    fetch('/logout')
    .then(data=>
     window.location.assign('/')   
       )
})