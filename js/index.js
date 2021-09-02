const signInForm = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

const msg = document.querySelector('.msg');




signInForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    loginFun();
    email.value = "";
    password.value = "";
})

function loginFun(){
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
       var user = userCredential.user;
        var uEmail= user.email;
        var splitEmail = uEmail.split("@");
        localStorage.setItem('loginName', splitEmail[0]);
        window.location.pathname = "../inc/logout.html";
    })
    .catch((error) => {
        msg.innerHTML = `<div class="error">${error.message}</div>`;
    });
}





// 


















