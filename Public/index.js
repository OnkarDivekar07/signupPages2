const form = document.getElementById("SignUpForm");
const FirstName = document.getElementById("FirstName");
const lastname = document.getElementById("lastname");
const SignEmail = document.getElementById("SignEmail");
const SignPassword = document.getElementById("SignPassword");

form.addEventListener("submit", submitSignUpForm);

async function submitSignUpForm(event) {
  event.preventDefault();
  const FirstNameinput = FirstName.value;
  console.log(FirstNameinput);
}
