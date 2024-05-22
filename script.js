const message =
  "A confirmation email has been sent to emailAdd. Please open it and click the button inside to confirm your subscription.";

const subscribeBtn = document.getElementById("subscribeBtn");

const inputEmail = document.getElementById("inputEmail");

const labelError = document.getElementById("labelError");

subscribeBtn.addEventListener("click", () => {
  if (validateEmail(inputEmail.value) === null) {
    console.log("error");
    labelError.classList.toggle("toggleError");
  } else {
    console.log("success");
    labelError.classList.toggle("toggleError");
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
