const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  const formObj = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(formObj);
  event.currentTarget.reset();
}
