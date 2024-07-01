form.addEventListener("submit", () => {
    const signup = {
      name:name_input.value,
      email: email.value,
      password: password.value,
    };
  
    fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(signup),
      headers: {
       "Content-Type": "application/json", 
      },
    }).
    then((res) => res.json()).
    then(data=>{
      console.log(signup);
      console.log(data);
      if(data.status=="error"){
          success.style.dislay ="none"
          error.style.dislay="block"
          error.innerText = data.error
        }else{
          success.style.dislay="block"
          error.style.dislay="none"
          success.innerText= data.success
        }
    })
  });
  