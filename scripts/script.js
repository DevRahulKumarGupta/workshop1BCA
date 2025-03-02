// Registeration Page
const form = document.getElementById("signupForm");

if(form){
  document.addEventListener("DOMContentLoaded", function () {
    const addSocialMediaBtn = document.getElementById("addSocialMedia");
    const socialMediaContainer = document.getElementById("socialMediaContainer");
  
    // Function to create a new social media entry
    function createSocialMediaEntry() {
        const div = document.createElement("div");
        div.className = "socialMediaEntry";
  
        const select = document.createElement("select");
        select.className = "socialMediaType";
        select.innerHTML = `
            <option value="LinkedIn">LinkedIn</option>
            <option value="Facebook">Facebook</option>
            <option value="X">X (Twitter)</option>
            <option value="Instagram">Instagram</option>
            <option value="Telegram">Telegram</option>
            <option value="Phone">Phone Number</option>
        `;
  
        const input = document.createElement("input");
        input.type = "text";
        input.className = "socialMediaValue";
        input.placeholder = "Enter your link or phone";
  
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "removeSocialMedia";
        removeBtn.innerText = "X";
        removeBtn.addEventListener("click", function () {
            socialMediaContainer.removeChild(div);
        });
  
        div.appendChild(select);
        div.appendChild(input);
        div.appendChild(removeBtn);
        socialMediaContainer.appendChild(div);
    }
  
    // Add another social media entry
    addSocialMediaBtn.addEventListener("click", createSocialMediaEntry);
  
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        // Get form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            dob: document.getElementById("dob").value,
            socialMedia: {}
        };
  
        // Get all social media inputs
        document.querySelectorAll(".socialMediaEntry").forEach(entry => {
            const key = entry.querySelector(".socialMediaType").value;
            const value = entry.querySelector(".socialMediaValue").value;
            if (value) {
                formData.socialMedia[key] = value;
            }
        });
  
        // Handle profile picture upload
        const fileInput = document.getElementById("profilePic");
        const file = fileInput.files[0];
  
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                formData.profilePic = e.target.result; // Save base64 string
                localStorage.setItem(formData.email, JSON.stringify(formData));
                alert(`Congratulation ${formData.name} Registration successful!`);
                sessionStorage.setItem("active", formData.email);
                window.location.href = 'home.html'
            };
            reader.readAsDataURL(file);
        } else {
            localStorage.setItem(formData.email, JSON.stringify(formData));
            alert("Registration successful! Data saved to localStorage.");
            sessionStorage.setItem("active", formData.email);
            window.location.href = 'home.html'
        }
    });
  });
}


// Login Page
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault()
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let user = JSON.parse(localStorage.getItem(email))

  if(!user){
    alert("User not registered please sign up first");
    window.location.href = 'index.html'
    return;
  }

  if(user.password == password){
    console.log("Success")
    sessionStorage.setItem("active", email);
    window.location.href = 'home.html'
  }else{
    window.alert("Wrong credentials")
  }
  

})

