const registerForm = document.getElementById('form');
const newEmail = document.getElementById('newEmail');
const newPassword = document.getElementById('newPassword');

const msg = document.querySelector('.msg');


registerForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    registerFun();
    newEmail.value = "";
    newPassword.value = "";
})


function registerFun(){
    firebase.auth().createUserWithEmailAndPassword(newEmail.value,newPassword.value)
    .then((userCredential) => {
        var user = userCredential.user;
        var uEmail= user.email;
        var splitEmail = uEmail.split("@")
        localStorage.setItem('loginName', splitEmail[0]);
        window.location.pathname = "../inc/logout.html";
    })
    .catch((error) => {
        msg.innerHTML = `<div class="error">${error.message}</div>`;
    });
}
