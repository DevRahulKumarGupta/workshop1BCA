document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const user = {
    name,
    email,
    password,
  };
    console.log(user,"user")

  localStorage.setItem("user",JSON.stringify(user))
});
console.log(localStorage.getItem("user"),"user") 



document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault()
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  console.log("Email", email)
  console.log("Password", password)

  let user = JSON.parse(localStorage.getItem("user"))

  if(!user){
    alert("User not registered please sign up first");
    window.location.href = '/'
    return;
  }

  if(user.email == email && user.password == password){
    console.log("Success")
    window.location.href = '/home.html'
  }else{
    window.alert("Wrong credentials")
  }
  

})