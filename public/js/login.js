
form.addEventListener("submit", () => {
  const login = {
    email: email.value,
    password: password.value,
  };

  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "appliction/json",
    },
  }).
  then((res) => res.json()).
  then(data=>{
    if(data.status=="error"){
        success.style.dislay ="none"
        error.style.dislay="block"
        error.innerText = data.error
      }else{
        success.style.dislay="block"
        error.style.dislay="block"
        success.innerText= data.success
      }
  })
});
