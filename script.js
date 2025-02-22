// Registeration Page
document.getElementById("signupForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  //Creating Object
  const user = {
    name,
    email,
    password,
  };
    console.log(user,"user")
  //Saving to the local storage in JSON form
  localStorage.setItem("user",JSON.stringify(user))
});
console.log(localStorage.getItem("user"),"user") 


// Login Page
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault()
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
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

// Welcome Page
function Welcome(){
  let user = JSON.parse(localStorage.getItem("user"))
  if(!user){
    alert("User not registered please sign up first");
    window.location.href = '/'
    return;
  }

  document.getElementById("name").innerText=user.name
}
