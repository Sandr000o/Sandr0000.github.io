const $btnSignIn= document.querySelector(".sign-in-btn");
      $btnSingUp= document.querySelector(".sign-up-btn");
      $signUp =document.querySelector(".sign-up")
      $signIn=document.querySelector(".sign-in")

document.addEventListener("click", e => {
    if (e.target === $btnSignIn || e.target === $btnSingUp) {
        $signUp.classList.toggle("active");
        $signIn.classList.toggle("active");
    }
});
