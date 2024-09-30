const form = document.querySelector("#form");
const error = document.querySelector("#error");
const email = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailvalue = email.value;

  if (!emailvalue.trim() == "" || emailvalue.includes("@") == true) {
    let emailsplit = emailvalue.split("@");
    if (emailsplit[1].includes(".")) alert("valid email");
    else error.classList.remove("dontshow");
  } else error.classList.remove("dontshow");
});