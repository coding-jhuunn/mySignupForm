const message =
  "A confirmation email has been sent to emailAdd. Please open it and click the button inside to confirm your subscription.";

const subscribeBtn = document.getElementById("subscribeBtn");

const inputEmail = document.getElementById("inputEmail");

const labelError = document.getElementById("labelError");

const popup = document.getElementById("popup");

const main = document.getElementById("main");

const popupDetail = document.getElementById("popupDetail");
const popUpDiv = document.getElementById("divPopUp");
const popUpBtn = document.getElementById("popupBtn");

subscribeBtn.addEventListener("click", () => {
  if (validateEmail(inputEmail.value) === null) {
    console.log("error");
    labelError.classList.add("toggleError");
  } else {
    labelError.classList.remove("toggleError");

    main.classList.remove("display");
    main.classList.add("noDisplay");

    popUpDiv.classList.remove("noDisplay");
    popUpDiv.classList.add("display");

    popupDetail.innerHTML = ` A confirmation email has been sent to
    <span class="bold popupDetail">${inputEmail.value}</span>. Please open it and click the
    button inside to confirm your subscription.`;

    console.log("success");
  }
});

popUpBtn.addEventListener("click", () => {
  popUpDiv.classList.remove("display");
  popUpDiv.classList.add("noDisplay");
  main.classList.remove("noDisplay");
  main.classList.add("display");
  inputEmail.value = "";
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
